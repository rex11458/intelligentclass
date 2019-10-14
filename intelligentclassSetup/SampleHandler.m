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
#import <CocoaAsyncSocket/CocoaAsyncSocket.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

#import "H264Encoder.h"

NSString *const ip = @"127.0.0.1";

int const port = 9999;

@interface SampleHandler()<GCDAsyncSocketDelegate, H264EncoderDelegate>
{
    GCDAsyncSocket *_socket;

    H264Encoder *_h264Encoder;
}
@end

@implementation SampleHandler

- (void)broadcastStartedWithSetupInfo:(NSDictionary<NSString *,NSObject *> *)setupInfo {
  
    [self connectToHost];
    
    [self initH264Encoder];
    
    //通过通知监听屏幕旋转
//     [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(orientationDidChange:)name:UIApplicationDidChangeStatusBarOrientationNotification object:nil];
  
}


- (void)connectToHost{
    if(!_socket){
        _socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_global_queue(0, 0)];
    }
    
    if([_socket isConnected]){
        
        [_socket disconnect];
    }
    
    NSError *error = nil;
    _socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_main_queue()];
    [_socket connectToHost:ip onPort:port error:&error];
    
}



- (void)initH264Encoder{
    CGRect bounds = [[UIScreen mainScreen] bounds];
    CGFloat scale =  1.6 ;// [UIScreen mainScreen].scale;
    
    
    
    _h264Encoder = [[H264Encoder alloc] initWithWidth:CGRectGetWidth(bounds) * scale height:CGRectGetHeight(bounds) * scale];
    
    _h264Encoder.delegate = self;
}



- (void)processSampleBuffer:(CMSampleBufferRef)sampleBuffer withType:(RPSampleBufferType)sampleBufferType {
    switch (sampleBufferType) {
        case RPSampleBufferTypeVideo:
          
            
            [_h264Encoder encodeBuffer:sampleBuffer];

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


- (void)broadcastFinished {
    [_socket disconnect];
    [_h264Encoder stopEncode];
//    [[NSNotificationCenter defaultCenter] removeObserver:self name:UIApplicationDidChangeStatusBarOrientationNotification object:nil];
}



#pragma mark - H264EncoderDelegate
- (void)h264encoder:(H264Encoder *)encoder processedData:(NSData *)data{
    
    
    [_socket writeData:data withTimeout:-1 tag:0];
}


//#pragma mark - 横竖屏切换
//-(void)orientationDidChange:(NSNotification *)note{
//    NSLog(@"note:%@",note);
//    CGRect bounds = [[UIScreen mainScreen] bounds];
//    CGFloat scale = [UIScreen mainScreen].scale;
//
//    [_h264Encoder changeResolutionWithWidth:CGRectGetWidth(bounds) * scale height:CGRectGetHeight(bounds) * scale];
//
//}
@end
