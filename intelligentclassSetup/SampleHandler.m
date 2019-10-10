//
//  SampleHandler.m
//  BroadcastUploadNew
//
//  Created by Anirban on 2/12/18.
//  Copyright © 2018 Anirban. All rights reserved.
//


#import "SampleHandler.h"
#include <stdio.h>
#import <VideoToolbox/VideoToolbox.h>

#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>


@interface SampleHandler()
{
    int _client_sockfd;
    VTCompressionSessionRef _encodingSession;
    int _frameNO;
}
@end
char *ip = "127.0.0.1";
int port = 9999;



@implementation SampleHandler

- (void)broadcastStartedWithSetupInfo:(NSDictionary<NSString *,NSObject *> *)setupInfo {
  
    [self connectToHost];
    [self initEncoder];

}


- (void)broadcastFinished {
    close(_client_sockfd);
    [self stopEncode];
}



- (void)stopEncode
{
    if (_encodingSession) {
        VTCompressionSessionCompleteFrames(_encodingSession, kCMTimeInvalid);
        VTCompressionSessionInvalidate(_encodingSession);
        CFRelease(_encodingSession);
        _encodingSession = NULL;
        _frameNO = 0;
    }
}

- (void)initEncoder{
    _frameNO = 0;
    CGRect bounds = [[UIScreen mainScreen] bounds];
    CGFloat width =  CGRectGetWidth(bounds);
    CGFloat height =  CGRectGetHeight(bounds);
    OSStatus status = VTCompressionSessionCreate(NULL,width, height, kCMVideoCodecType_H264, NULL, NULL, NULL, NULL, NULL,  &_encodingSession);
    NSLog(@"H264: VTCompressionSessionCreate %d", (int)status);
    if (status != 0)
    {
        NSLog(@"H264: Unable to create a H264 session");
        return ;
    }
    
    // 设置实时编码输出（避免延迟）
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_RealTime, kCFBooleanTrue);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_ProfileLevel, kVTProfileLevel_H264_Baseline_AutoLevel);
    
    // 设置关键帧（GOPsize)间隔
    int frameInterval = 24;
    CFNumberRef  frameIntervalRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &frameInterval);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_MaxKeyFrameInterval, frameIntervalRef);
    
    //设置期望帧率
    int fps = 24;
    CFNumberRef  fpsRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &fps);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_ExpectedFrameRate, fpsRef);
    
    
    //设置码率，均值，单位是byte
    int bitRate = width * height * 3 * 4 * 8;
    CFNumberRef bitRateRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberSInt32Type, &bitRate);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_AverageBitRate, bitRateRef);
    
    //设置码率，上限，单位是bps
    int bitRateLimit = width * height * 3 * 4;
    CFNumberRef bitRateLimitRef = CFNumberCreate(kCFAllocatorDefault, kCFNumberSInt32Type, &bitRateLimit);
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_DataRateLimits, bitRateLimitRef);
    
    // 7. 准备开始编码
//    VTCompressionSessionPrepareToEncodeFrames(_encodingSession);
}

- (void)connectToHost{

    struct sockaddr_in remote_addr;

    memset(&remote_addr, 0, sizeof(remote_addr));
    remote_addr.sin_family = AF_INET;
    remote_addr.sin_addr.s_addr = inet_addr(ip);
    remote_addr.sin_port = htons(port);
    
    _client_sockfd = socket(PF_INET, SOCK_STREAM, 0);
    
    if(_client_sockfd < 0){
        
        perror("socket error");
        return;
    }
    
    if(connect(_client_sockfd,(struct sockaddr *)&remote_addr, sizeof(struct sockaddr)) < 0){
        perror("connect error");
        return;
    }
    
    printf("connect to server success");
}


- (void)sendBuffer:(CMSampleBufferRef)sampleBuffer{
    
    dispatch_sync(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        
        
        
        CVImageBufferRef imageBuffer = CMSampleBufferGetImageBuffer(sampleBuffer);
        
//        CMTime presentationTimeStamp = CMSampleBufferGetPresentationTimeStamp(sampleBuffer);
        CMTime presentationTimeStamp = CMTimeMake(_frameNO++, 1000);

        VTEncodeInfoFlags flags;
        
        
        const char bytes[] = "\x00\x00\x00\x01";
        size_t length = (sizeof bytes) - 1; //string literals have implicit trailing '\0'
        NSData *byteHeader = [NSData dataWithBytes:bytes length:length];
        
        
        VTCompressionSessionEncodeFrameWithOutputHandler(self->_encodingSession, imageBuffer, presentationTimeStamp, kCMTimeInvalid, NULL, &flags, ^(OSStatus status, VTEncodeInfoFlags infoFlags, CMSampleBufferRef  _Nullable sampleBuffer) {
            NSLog(@"status:%d",status);
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
            bool keyframe = !CFDictionaryContainsKey( (CFArrayGetValueAtIndex(CMSampleBufferGetSampleAttachmentsArray(sampleBuffer, true), 0)), kCMSampleAttachmentKey_NotSync);
//
            NSLog(@"isKeyFrame:%d",keyframe);
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
            
//            NSLog(@"mdata:%@",mData);
//            NSLog(@"last mData.length:%ld",mData.length);
            send(self->_client_sockfd, mData.bytes, mData.length, 0);
            
        });
        
    });

}

- (void)processSampleBuffer:(CMSampleBufferRef)sampleBuffer withType:(RPSampleBufferType)sampleBufferType {
    switch (sampleBufferType) {
        case RPSampleBufferTypeVideo:
            // Handle video sample buffer
            NSLog(@"processSampleBuffer");
            [self sendBuffer:sampleBuffer];
//            [encoder encode:sampleBuffer];
            break;
        case RPSampleBufferTypeAudioApp:
            // Handle audio sample buffer for app audio
            break;
        case RPSampleBufferTypeAudioMic:
            // Handle audio sample buffer for mic audio
            break;
            
        default:
            break;
    }
}

@end
