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
    
    CIContext *_ciContext;
}

@property (nonatomic) CGImagePropertyOrientation orientation;

@end
@implementation H264Encoder

- (instancetype)initWithWidth:(float)width height:(float)height {
    
    if(self = [super init]){
        
        _width = width;
        _height = height;
        _frameNo = 0;
        _encodeQueue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
        
        _ciContext = [CIContext context];
        self.orientation = kCGImagePropertyOrientationUp;
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
    int fps = 15;
    CFNumberRef  fpsRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &fps);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_ExpectedFrameRate, fpsRef);
    
    
    //设置码率，均值，单位是byte
    int bitRate = [self getResolution];
    NSLog(@"bitRate = %d",bitRate);
    
    CFNumberRef bitRateRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberSInt32Type, &bitRate);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_AverageBitRate, bitRateRef);
    
    
    // 码率上限 接收数组类型CFArray[CFNumber] [bytes,seconds,bytes,seconds...] 单位是bps
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_DataRateLimits, (__bridge CFArrayRef _Nullable)@[@(bitRate*1.5/8), @1]);
    
}


- (void)encodeBuffer:(CMSampleBufferRef)sampleBuffer{
    
    dispatch_sync(_encodeQueue, ^{
        CGImagePropertyOrientation oritation = ((__bridge NSNumber*)CMGetAttachment(sampleBuffer, (__bridge CFStringRef)RPVideoSampleOrientationKey , NULL)).unsignedIntValue;

        if(self.orientation != oritation){
            [self changeResolutionWithWidth:self->_height height:self->_width];
            self.orientation = oritation;
            return;
        }
        
        
//        CMSampleBufferRef sampleBuffer = [self rotateBuffer:buffer];
        
        CVImageBufferRef imageBuffer = CMSampleBufferGetImageBuffer(sampleBuffer);

        CIImage *sourceImage = [CIImage imageWithCVPixelBuffer:imageBuffer];
        CIImage *outputImage = [sourceImage imageByApplyingOrientation:oritation];
        if(oritation == kCGImagePropertyOrientationLeft){
            outputImage = [sourceImage imageByApplyingOrientation:kCGImagePropertyOrientationRight];
        }
        if(oritation == kCGImagePropertyOrientationRight){
                outputImage = [sourceImage imageByApplyingOrientation:kCGImagePropertyOrientationLeft];
            }
     
        CGFloat outputWidth  = self->_width;
        CGFloat outputHeight = self->_height;
        CGFloat inputWidth = outputImage.extent.size.width;
        CGFloat inputHeight = outputImage.extent.size.height;

        CGAffineTransform tranfrom = CGAffineTransformMakeScale(outputWidth/inputWidth, outputHeight/inputHeight);
        outputImage = [outputImage imageByApplyingTransform:tranfrom];


        CVImageBufferRef outputPixelBuffer = nil;

        NSDictionary* pixelBufferOptions = @{
                                             (NSString*) kCVPixelBufferWidthKey : @(self->_width),
                                             (NSString*) kCVPixelBufferHeightKey : @(self->_height),
                                             (NSString*) kCVPixelBufferOpenGLESCompatibilityKey : @YES,
                                             (NSString*) kCVPixelBufferIOSurfacePropertiesKey : @{}
                                             };
     
        CVReturn ret = CVPixelBufferCreate(kCFAllocatorDefault, self->_width, self->_height, kCVPixelFormatType_32BGRA, (__bridge CFDictionaryRef)pixelBufferOptions, &outputPixelBuffer);
        [self->_ciContext render:outputImage toCVPixelBuffer:outputPixelBuffer bounds:outputImage.extent colorSpace:CGColorSpaceCreateDeviceRGB()];
        
        
        if (ret!= noErr) {
            NSLog(@"创建streamer buffer失败");
            outputPixelBuffer = nil;
        }
        
        //        CMTime presentationTimeStamp = CMSampleBufferGetPresentationTimeStamp(sampleBuffer);
        CMTime presentationTimeStamp = CMTimeMake(self->_frameNo++, 1000);
        
        VTEncodeInfoFlags flags;
        
        
        const char bytes[] = "\x00\x00\x00\x01";
        size_t length = (sizeof bytes) - 1; //string literals have implicit trailing '\0'
        NSData *byteHeader = [NSData dataWithBytes:bytes length:length];
        
        
        VTCompressionSessionEncodeFrameWithOutputHandler(self->_encodingSession, outputPixelBuffer, presentationTimeStamp, kCMTimeInvalid, NULL, &flags, ^(OSStatus status, VTEncodeInfoFlags infoFlags, CMSampleBufferRef  _Nullable sampleBuffer) {
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
        CVPixelBufferRelease(outputPixelBuffer);

    });
    
}

//
//- (CVPixelBufferRef)resizeAndRotatePixelBuffer:(CVPixelBufferRef)sourcePixelBuffer {
//
//    CGImagePropertyOrientation oritation = ((__bridge NSNumber*)CMGetAttachment(sampleBuffer, (__bridge CFStringRef)RPVideoSampleOrientationKey , NULL)).unsignedIntValue;
//
//    CIImage *outputImage;
//    if (self.privacyMode) {
//        outputImage = self.privacyImage;
//    } else {
//        //11.1以上支持自动旋转
//#ifdef __IPHONE_11_1
//        if (UIDevice.currentDevice.systemVersion.floatValue > 11.1) {
//            CGImagePropertyOrientation oritation = ((__bridge NSNumber*)CMGetAttachment(sampleBuffer, (__bridge CFStringRef)RPVideoSampleOrientationKey , NULL)).unsignedIntValue;
//            if (oritation != self.lastOritation) {
//                self.lastOritation = oritation;
//                if (oritation == kCGImagePropertyOrientationLeft) {
//                    [kit setVideoOrientation:UIDeviceOrientationLandscapeLeft];
//                } else if (oritation == kCGImagePropertyOrientationRight) {
//                    [kit setVideoOrientation:UIDeviceOrientationLandscapeRight];
//                }
//            }
//        }
//#endif
//        CIImage *sourceImage = [CIImage imageWithCVPixelBuffer:sourcePixelBuffer];
//        sourceImage = [sourceImage imageByApplyingOrientation:cvMobileRotate];
//        CGFloat outputWidth  = self.videoSize.width;
//        CGFloat outputHeight = self.videoSize.height;
//        CGFloat inputWidth = sourceImage.extent.size.width;
//        CGFloat inputHeight = sourceImage.extent.size.height;
//        //    float scale = MIN(outputWidth/inputWidth, outputHeight/inputHeight);
//        CGAffineTransform tranfrom = CGAffineTransformMakeScale(outputWidth/inputWidth, outputHeight/inputHeight);
//        outputImage = [sourceImage imageByApplyingTransform:tranfrom];
//    }
//    if (!outputPixelBuffer) {
//        //推流
//        NSDictionary* pixelBufferOptions = @{
//                                             (NSString*) kCVPixelBufferWidthKey : @(self.videoSize.width),
//                                             (NSString*) kCVPixelBufferHeightKey : @(self.videoSize.height),
//                                             (NSString*) kCVPixelBufferOpenGLESCompatibilityKey : @YES,
//                                             (NSString*) kCVPixelBufferIOSurfacePropertiesKey : @{}
//                                             };
//        CVReturn ret = CVPixelBufferCreate(kCFAllocatorDefault, self.videoSize.width, self.videoSize.height, kCVPixelFormatType_32BGRA, (__bridge CFDictionaryRef)pixelBufferOptions, &outputPixelBuffer);
//
//        if (ret!= noErr) {
//            NSLog(@"创建streamer buffer失败");
//            outputPixelBuffer = nil;
//            return outputPixelBuffer;
//        }
//    }
//    if (cicontext) {
//        [cicontext render:outputImage toCVPixelBuffer:outputPixelBuffer bounds:outputImage.extent colorSpace:CGColorSpaceCreateDeviceRGB()];
//    }
//    return outputPixelBuffer;
//}

//-(CGFloat)getRotateByBuffer:(CMSampleBufferRef)sampleBuffer{
//    CGFloat rotate = 270;
//
//    CFStringRef RPVideoSampleOrientationKeyRef = (__bridge CFStringRef)RPVideoSampleOrientationKey;
//    NSNumber *orientation = (NSNumber *)CMGetAttachment(sampleBuffer, RPVideoSampleOrientationKeyRef,NULL);
//
//    switch ([orientation integerValue]) {
//            //竖屏时候
//            //SDK内部会做图像大小自适配(不会变形) 所以上层只要控制横屏时候的影像旋转的问题
//        case kCGImagePropertyOrientationUp:{
//            rotate = 0;
//        }
//            break;
//        case kCGImagePropertyOrientationDown:{
//            rotate = 180;
//            break;
//        }
//        case kCGImagePropertyOrientationLeft: {
//            //静音键那边向上 所需转90度
//            rotate = 90;
//        }
//            break;
//        case kCGImagePropertyOrientationRight:{
//            //关机键那边向上 所需转270
//            rotate = 270;
//        }
//            break;
//        default:
//            break;
//    }
//    return rotate;
//}
//
///* rotationConstant:
// *  0 -- rotate 0 degrees (simply copy the data from src to dest)
// *  1 -- rotate 90 degrees counterclockwise
// *  2 -- rotate 180 degress
// *  3 -- rotate 270 degrees counterclockwise
// */
//- (CMSampleBufferRef )rotateBuffer:(CMSampleBufferRef)buffer  {
//    NSLog(@"oldSampleBuffer:%@",buffer);
//
//    CFStringRef RPVideoSampleOrientationKeyRef = (__bridge CFStringRef)RPVideoSampleOrientationKey;
//    NSNumber *attachment = (NSNumber *)CMGetAttachment(buffer, RPVideoSampleOrientationKeyRef,NULL);
//    CGImagePropertyOrientation orientation = (CGImagePropertyOrientation)[attachment integerValue];
//   
////    if(orientation == self.orientation){
////        return buffer;
////    }
//    self.orientation = orientation;
//
//    NSLog(@"orientation: %d",orientation);
//
//    //
//    CVPixelBufferRef pixelBuffer = CMSampleBufferGetImageBuffer(buffer);
////
//    CIImage *ciimage = [CIImage imageWithCVPixelBuffer:pixelBuffer];
//    size_t width                        = CVPixelBufferGetWidth(pixelBuffer);
//    size_t height                       = CVPixelBufferGetHeight(pixelBuffer);
//
//    //    // 旋转的方法
////    CIImage *wImage = [ciimage imageByApplyingCGOrientation:kCGImagePropertyOrientationLeft];
////
////    CGFloat angle = [self getRotateByBuffer:buffer];
//    
////    CGFloat radian = angle / 180 * M_PI;
////    CGAffineTransform rotatedTransform = CGAffineTransformMakeRotation(radian);
////    CIImage *newImage = [vImage imageByApplyingTransform:rotatedTransform];
////    CIImage *newImage = [wImage imageByApplyingTransform:CGAffineTransformMakeScale(0.5, 0.5)];
////
//    CVPixelBufferLockBaseAddress(pixelBuffer, 0);
//    CVPixelBufferRef newPixcelBuffer = nil;
//    CVPixelBufferCreate(kCFAllocatorDefault, height , width, kCVPixelFormatType_32BGRA, nil, &newPixcelBuffer);
////
//    [_ciContext render:ciimage toCVPixelBuffer:newPixcelBuffer];
//    
//    
//    CVPixelBufferUnlockBaseAddress(pixelBuffer, 0);
//    CMVideoFormatDescriptionRef videoInfo = nil;
//    CMVideoFormatDescriptionCreateForImageBuffer(kCFAllocatorDefault, newPixcelBuffer, &videoInfo);
//    CMTime duration = CMSampleBufferGetDuration(buffer);
//    CMTime presentationTimeStamp = CMSampleBufferGetPresentationTimeStamp(buffer);
//    CMTime decodeTimeStamp = CMSampleBufferGetDecodeTimeStamp(buffer);
//    CMSampleTimingInfo sampleTimingInfo;
//    sampleTimingInfo.duration = duration;
//    sampleTimingInfo.presentationTimeStamp = presentationTimeStamp;
//    sampleTimingInfo.decodeTimeStamp = decodeTimeStamp;
////    //
//    CMSampleBufferRef newSampleBuffer = nil;
//    CMSampleBufferCreateForImageBuffer(kCFAllocatorMalloc, newPixcelBuffer, true, nil, nil, videoInfo, &sampleTimingInfo, &newSampleBuffer);
//    
//    CFRelease(videoInfo);
//    CVPixelBufferRelease(newPixcelBuffer);
//    NSLog(@"newSampleBuffer:%@",newSampleBuffer);
//    return newSampleBuffer;
//
//}



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
    return 1500000;
    CGSize screenSize = CGSizeMake(_width, _height);
    
    CGFloat scale = [UIScreen mainScreen].scale;
    
    CGFloat screenX = screenSize.width * scale;
    CGFloat screenY = screenSize.height * scale;
    
    return screenX * screenY;
    
}

@end
