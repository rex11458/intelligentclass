//
//  H264Encoder.m
//  intelligentclassSetup
//
//  Created by LiuRex on 2019/10/12.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "H264Encoder.h"

#import <VideoToolbox/VideoToolbox.h>
@interface H264Encoder ()
{
    float _width;
    float _height;
    int _frameNo;
    
    dispatch_queue_t _encodeQueue;
    
    VTCompressionSessionRef _encodingSession;
    
}
@end
@implementation H264Encoder

- (instancetype)initWithWidth:(float)width height:(float)height {
    
    if(self = [super init]){
        
        _width = width;
        _height = height;
        _frameNo = 0;
        _encodeQueue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
        
        [self initEncodeConfig];
    }
    
    return self;
}

- (void)changeResolutionWithWidth:(float)width height:(float)height{
    [self stopEncode];
    _width = width;
    _height = height;
    
    [self initEncodeConfig];
}

- (void)initEncodeConfig{
    _frameNo = 0;
    NSLog(@"width:%f,height:%f",_width,_height);
    OSStatus status = VTCompressionSessionCreate(NULL,_width, _height, kCMVideoCodecType_H264, NULL, NULL, NULL, NULL, NULL,  &_encodingSession);
//    NSLog(@"H264: VTCompressionSessionCreate %d", (int)status);
    if (status != 0)
    {
        NSLog(@"H264: Unable to create a H264 session");
        return ;
    }
    
    // 设置实时编码输出（避免延迟）
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_RealTime, kCFBooleanTrue);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_ProfileLevel, kVTProfileLevel_H264_Main_AutoLevel);
    
    // 设置关键帧（GOPsize)间隔
    int frameInterval = 30;
    CFNumberRef  frameIntervalRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &frameInterval);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_MaxKeyFrameInterval, frameIntervalRef);
    
    //设置期望帧率
    int fps = 60;
    CFNumberRef  fpsRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &fps);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_ExpectedFrameRate, fpsRef);
    
    
    //设置码率，均值，单位是byte
    int bitRate = [self getResolution];
    CFNumberRef bitRateRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberSInt32Type, &bitRate);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_AverageBitRate, bitRateRef);
    
    
    // 码率上限 接收数组类型CFArray[CFNumber] [bytes,seconds,bytes,seconds...] 单位是bps
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_DataRateLimits, (__bridge CFArrayRef _Nullable)@[@(bitRate*1.5/8), @1]);
    
}


- (void)encodeBuffer:(CMSampleBufferRef)sampleBuffer{
    
    dispatch_sync(_encodeQueue, ^{
        
        CVImageBufferRef imageBuffer = CMSampleBufferGetImageBuffer(sampleBuffer);
        
        //        CMTime presentationTimeStamp = CMSampleBufferGetPresentationTimeStamp(sampleBuffer);
        CMTime presentationTimeStamp = CMTimeMake(self->_frameNo++, 1000);
        
        VTEncodeInfoFlags flags;
        
        
        const char bytes[] = "\x00\x00\x00\x01";
        size_t length = (sizeof bytes) - 1; //string literals have implicit trailing '\0'
        NSData *byteHeader = [NSData dataWithBytes:bytes length:length];
        
        
        VTCompressionSessionEncodeFrameWithOutputHandler(self->_encodingSession, imageBuffer, presentationTimeStamp, kCMTimeInvalid, NULL, &flags, ^(OSStatus status, VTEncodeInfoFlags infoFlags, CMSampleBufferRef  _Nullable sampleBuffer) {
//                        NSLog(@"status:%d",status);
            if (status != noErr) {
                NSLog(@"H264: VTCompressionSessionEncodeFrame failed with %d", (int)status);
                
                // End the session
                VTCompressionSessionInvalidate(self->_encodingSession);
                CFRelease(self->_encodingSession);
                self->_encodingSession = NULL;
                return;
            }
            
            if (!CMSampleBufferDataIsReady(sampleBuffer))
            {
                NSLog(@"H264 data is not ready ");
                return;
            }
            
            NSMutableData *mData = [NSMutableData data];
            
            CMFormatDescriptionRef format = CMSampleBufferGetFormatDescription(sampleBuffer);
            
            size_t sparameterSetSize, sparameterSetCount;
            const uint8_t *sparameterSet;
            OSStatus statusCode = CMVideoFormatDescriptionGetH264ParameterSetAtIndex(format, 0, &sparameterSet, &sparameterSetSize, &sparameterSetCount, 0 );
            if (statusCode == noErr)
            {
                // Found sps and now check for pps
                size_t pparameterSetSize, pparameterSetCount;
                const uint8_t *pparameterSet;
                OSStatus statusCode = CMVideoFormatDescriptionGetH264ParameterSetAtIndex(format, 1, &pparameterSet, &pparameterSetSize, &pparameterSetCount, 0 );
                if (statusCode == noErr)
                {
                    // Found pps
                    NSData *sps = [NSData dataWithBytes:sparameterSet length:sparameterSetSize];
                    [mData appendData:byteHeader];
                    [mData appendData:sps];
                    NSData *pps = [NSData dataWithBytes:pparameterSet length:pparameterSetSize];
                    
                    [mData appendData:byteHeader];
                    [mData appendData:pps];
                }
            }
            
            
            CMBlockBufferRef dataBuffer = CMSampleBufferGetDataBuffer(sampleBuffer);
            size_t length, totalLength;
            char *dataPointer;
            OSStatus statusCodeRet = CMBlockBufferGetDataPointer(dataBuffer, 0, &length, &totalLength, &dataPointer);
            if(statusCodeRet == kCMBlockBufferNoErr)
            {
                size_t bufferOffset = 0;
                static const int AVCCHeaderLength = 4;
                while (bufferOffset < totalLength - AVCCHeaderLength) {
                    
                    // Read the NAL unit length
                    uint32_t NALUnitLength = 0;
                    memcpy(&NALUnitLength, dataPointer + bufferOffset, AVCCHeaderLength);
                    
                    // Convert the length value from Big-endian to Little-endian
                    NALUnitLength = CFSwapInt32BigToHost(NALUnitLength);
                    
                    NSData* data = [[NSData alloc] initWithBytes:(dataPointer + bufferOffset + AVCCHeaderLength) length:NALUnitLength];
                    [mData appendData:byteHeader];
                    [mData appendData:data];
                    
                    //                [encoder->_delegate gotEncodedData:data isKeyFrame:keyframe];
                    
                    // Move to the next NAL unit in the block buffer
                    bufferOffset += AVCCHeaderLength + NALUnitLength;
                }
                
            }
            
            
            if([self.delegate respondsToSelector:@selector(h264encoder:processedData:)]){
                [self.delegate h264encoder:self processedData:mData];
            }
        });
        
    });
    
}


- (void)stopEncode{
    _frameNo = 0;
    if (_encodingSession) {
        VTCompressionSessionCompleteFrames(_encodingSession, kCMTimeInvalid);
        VTCompressionSessionInvalidate(_encodingSession);
        CFRelease(_encodingSession);
        _encodingSession = NULL;
    }
}




- (int)getResolution{
    
    CGSize screenSize = CGSizeMake(_width, _height);
    
    CGFloat scale = [UIScreen mainScreen].scale;
    
    CGFloat screenX = screenSize.width * scale;
    CGFloat screenY = screenSize.height * scale;
    
    return screenX * screenY;
}

@end
