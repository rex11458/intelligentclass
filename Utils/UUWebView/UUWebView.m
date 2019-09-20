//
//  UUWebView.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/20.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "UUWebView.h"
#import "RootViewController.h"
static NSString *LOGIN = @"login";                     // 开启拍照，并上传图片，单张
static NSString *OPEN_CAMERA = @"OpenCamera";                     // 开启拍照，并上传图片，单张
static NSString *OPEN_PICK = @"openPick";                          //打开相册，并选择 1 张图片上传
static NSString *OPEN_QRCODE = @"OpenQRcode";                      // 打开扫码识别界面
static NSString *SEND_PRJ_SCREEN_IP = @"sendPrjScreenIP";           //  发送查询到的网关 IP，调用 window.getScreenIP(code)触发
static NSString *SEND_START_BROADCAST = @"sendStartBroadcast";     //    发送开始广播
static NSString *SEND_STOP_BRODCAST = @"sendStopBroadcast";          // 发送停止广播
static NSString *OPEN_PRJ_SCREEN = @"openPrjScreen";                 //打开投屏界面
static NSString *SEND_SYS_INFO = @"sendSystemInfo";                //  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
static NSString *SEND_GROUP_MESSAGE = @"sendGroupMsg";            // 发送当前学生的最新小组信息


@implementation UUWebView

- (instancetype)initWithCoder:(NSCoder *)coder
{
    // An initial frame for initialization must be set, but it will be overridden
    // below by the autolayout constraints set in interface builder.
    CGRect frame = [[UIScreen mainScreen] bounds];
 
    WKWebViewConfiguration *configuration = [WKWebViewConfiguration new];
    configuration.userContentController = self.userContent;
    self = [super initWithFrame:frame configuration:configuration];
    // Apply constraints from interface builder.
    self.translatesAutoresizingMaskIntoConstraints = NO;
    
    return self;
}

- (WKUserContentController *)userContent{
    
    id<WKScriptMessageHandler> delegate = [RootViewController sharedRootViewController];
    
    WKUserContentController *userContent = [[WKUserContentController alloc] init];
    //JS调用OC 添加处理脚本
    // 开启拍照，并上传图片，单张
    [userContent addScriptMessageHandler:delegate name:OPEN_CAMERA];
    //打开相册，并选择 1 张图片上传
    [userContent addScriptMessageHandler:delegate name:OPEN_PICK];
    // 打开扫码识别界面
    [userContent addScriptMessageHandler:delegate name:OPEN_QRCODE];
    //  发送查询到的网关 IP，调用 window.getScreenIP(code)触发
    [userContent addScriptMessageHandler:delegate name:SEND_PRJ_SCREEN_IP];
    //    发送开始广播
    [userContent addScriptMessageHandler:delegate name:SEND_START_BROADCAST];
    // 发送停止广播
    [userContent addScriptMessageHandler:delegate name:SEND_STOP_BRODCAST];
    //打开投屏界面
    [userContent addScriptMessageHandler:delegate name:OPEN_PRJ_SCREEN];
    //  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
    [userContent addScriptMessageHandler:delegate name:SEND_SYS_INFO];
    // 发送当前学生的最新小组信息
    [userContent addScriptMessageHandler:delegate name:SEND_GROUP_MESSAGE];
    
    return userContent;
}

@end
