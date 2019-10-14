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
    // [[UIDevice currentDevice] beginGeneratingDeviceOrientationNotifications];
    // [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleDeviceOrientationDidChange:) name:UIDeviceOrientationDidChangeNotification object:nil];
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
    CGSize screenSize = [[UIScreen mainScreen] bounds].size;
    
    CGFloat width = 720;
    CGFloat height = 720 * screenSize.height / screenSize.width;
    
    
    _h264Encoder = [[H264Encoder alloc] initWithWidth:width height:height];
    
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
    // [[NSNotificationCenter defaultCenter] removeObserver:self];
    // [[UIDevice currentDevice]endGeneratingDeviceOrientationNotifications];
}



#pragma mark - H264EncoderDelegate
- (void)h264encoder:(H264Encoder *)encoder processedData:(NSData *)data{
    
    
    [_socket writeData:data withTimeout:-1 tag:0];
}


#pragma mark - 屏幕旋转
- (void)handleDeviceOrientationDidChange:   (UIInterfaceOrientation)interfaceOrientation {
    UIDevice *device = [UIDevice currentDevice] ;
    switch (device.orientation) {
        case UIDeviceOrientationFaceUp:
            NSLog(@"屏幕朝上平躺");
            break;
        case UIDeviceOrientationFaceDown:
            NSLog(@"屏幕朝下平躺");
            break;
        case UIDeviceOrientationUnknown:
            NSLog(@"未知方向");
            break;
        case UIDeviceOrientationLandscapeLeft: {
            NSLog(@"屏幕向左横置");
//            // 横屏推流
//            [self destroySession];     // 销毁推流
//            // 建议加一个loading  因为销毁推流在重新推流会关闭在重新开启摄像头采集
//            _isScreenHorizontal = YES;  // 全局变量  横屏置为YES
//            [self testPushCapture];    // 重新推流
        }
            break;
        case UIDeviceOrientationLandscapeRight:
            NSLog(@"屏幕向右橫置");
            break;
        case UIDeviceOrientationPortrait: {
            NSLog(@"屏幕直立");
//            // 竖屏推流
//            [self destroySession];     // 销毁推流
//            _isScreenHorizontal = NO;  // 全局变量  横屏设置为NO
//            [self testPushCapture];    // 重新推流
        }
            break;
        case UIDeviceOrientationPortraitUpsideDown:
            NSLog(@"屏幕直立，上下顛倒");
            break;
        default:
            NSLog(@"无法辨识");
            break;
    }
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
