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
}
@end
char *ip = "127.0.0.1";
//char *ip = "192.168.5.37";
int port = 9999;



@implementation SampleHandler

- (void)broadcastStartedWithSetupInfo:(NSDictionary<NSString *,NSObject *> *)setupInfo {
  
    [self connectToHost];
    [self initEncoder];

}


- (void)broadcastFinished {
    close(_client_sockfd);
}


- (void)initEncoder{
    
    CGRect bounds = [[UIScreen mainScreen] bounds];
    
    OSStatus status = VTCompressionSessionCreate(NULL, CGRectGetWidth(bounds),  CGRectGetHeight(bounds), kCMVideoCodecType_JPEG, NULL, NULL, NULL, NULL, NULL,  &_encodingSession);
    NSLog(@"H264: VTCompressionSessionCreate %d", (int)status);
    if (status != 0)
    {
        NSLog(@"H264: Unable to create a H264 session");
        return ;
    }
    VTSessionSetProperty(_encodingSession, kVTCompressionPropertyKey_RealTime, kCFBooleanTrue);
    
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
    
    CVImageBufferRef imageBuffer = CMSampleBufferGetImageBuffer(sampleBuffer);
    
    CMTime presentationTimeStamp = CMSampleBufferGetPresentationTimeStamp(sampleBuffer);
   
    VTEncodeInfoFlags flags;
    
    VTCompressionSessionEncodeFrameWithOutputHandler(_encodingSession, imageBuffer, presentationTimeStamp, kCMTimeInvalid, NULL, &flags, ^(OSStatus status, VTEncodeInfoFlags infoFlags, CMSampleBufferRef  _Nullable sampleBuffer) {
        NSLog(@"status:%d",status);
        if (status != noErr) {
            NSLog(@"JPEG: VTCompressionSessionEncodeFrame failed with %d", (int)status);
            
            // End the session
            VTCompressionSessionInvalidate(self->_encodingSession);
            CFRelease(self->_encodingSession);
            self->_encodingSession = NULL;
            return;
        }
        
        if (!CMSampleBufferDataIsReady(sampleBuffer))
        {
            NSLog(@"jpeg data is not ready ");
            return;
        }
        
        CMBlockBufferRef dataBuffer = CMSampleBufferGetDataBuffer(sampleBuffer);
        size_t length, totalLength;
        char *dataPointer;
        OSStatus statusCodeRet = CMBlockBufferGetDataPointer(dataBuffer, 0, &length, &totalLength, &dataPointer);
        if(statusCodeRet == kCMBlockBufferNoErr)
        {
            NSData *data  = [[NSData alloc] initWithBytes:dataPointer length:totalLength];
            
            send(self->_client_sockfd, data.bytes, data.length, 0);

        }
    });
    
}

- (void)processSampleBuffer:(CMSampleBufferRef)sampleBuffer withType:(RPSampleBufferType)sampleBufferType {
    switch (sampleBufferType) {
        case RPSampleBufferTypeVideo:
            // Handle video sample buffer
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
