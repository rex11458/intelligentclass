//
//  RootViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "RootViewController.h"
#import <WebKit/WebKit.h>
#import "MediaPlayerViewController.h"
#import "WMDragView.h"
#import "DrawingViewController.h"
static NSString *OPEN_CAMERA = @"OpenCamera";                     // 开启拍照，并上传图片，单张
static NSString *OPEN_PICK = @"openPick";                          //打开相册，并选择 1 张图片上传
static NSString *OPEN_QRCODE = @"OpenQRcode";                      // 打开扫码识别界面
static NSString *SEND_PRJ_SCREEN_IP = @"sendPrjScreenIP";           //  发送查询到的网关 IP，调用 window.getScreenIP(code)触发
static NSString *SEND_START_BROADCAST = @"sendStartBroadcast";     //    发送开始广播
static NSString *SEND_STOP_BRODCAST = @"sendStopBroadcast";          // 发送停止广播
static NSString *OPEN_PRJ_SCREEN = @"openPrjScreen";                 //打开投屏界面
static NSString *SEND_SYS_INFO = @"sendSystemInfo";                //  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
static NSString *SEND_GROUP_MESSAGE = @"sendGroupMsg";            // 发送当前学生的最新小组信息


@interface RootViewController ()<WKNavigationDelegate,WKScriptMessageHandler>
{
    MediaPlayerViewController *_playerViewController;
    DrawingViewController *_drawingViewController;
    UIView *_headView;
    WMDragView *_dragView;
}
@property (nonatomic) WKWebView *webView;

@property(nonatomic) NSDictionary *ips;

@end

@implementation RootViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    [self __configSubViews];
    
    _drawingViewController = [DrawingViewController new];
    _drawingViewController.rootViewController = self;
}


- (void)__configSubViews{
    
    WKUserContentController *userContent = [[WKUserContentController alloc] init];
    
    //JS调用OC 添加处理脚本
    // 开启拍照，并上传图片，单张
    [userContent addScriptMessageHandler:self name:OPEN_CAMERA];
    //打开相册，并选择 1 张图片上传
    [userContent addScriptMessageHandler:self name:OPEN_PICK];
    // 打开扫码识别界面
    [userContent addScriptMessageHandler:self name:OPEN_QRCODE];
    //  发送查询到的网关 IP，调用 window.getScreenIP(code)触发
    [userContent addScriptMessageHandler:self name:SEND_PRJ_SCREEN_IP];
//    发送开始广播
    [userContent addScriptMessageHandler:self name:SEND_START_BROADCAST];
    // 发送停止广播
    [userContent addScriptMessageHandler:self name:SEND_STOP_BRODCAST];
    //打开投屏界面
    [userContent addScriptMessageHandler:self name:OPEN_PRJ_SCREEN];
    //  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
    [userContent addScriptMessageHandler:self name:SEND_SYS_INFO];
    // 发送当前学生的最新小组信息
    [userContent addScriptMessageHandler:self name:SEND_GROUP_MESSAGE];

    
    CGRect frame = CGRectMake(0, 0, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds) );

    WKWebViewConfiguration *config = [WKWebViewConfiguration new];
    config.userContentController = userContent;
    
    self.webView = [[WKWebView alloc] initWithFrame:frame configuration:config];
    self.webView.navigationDelegate = self;
    NSString *root = [[NSBundle mainBundle] pathForResource:@"dist/index" ofType:@"html"];

    NSURL *url = [[NSURL alloc] initFileURLWithPath:root];
    //    NSURL *url = [NSURL URLWithString:@"http://pb.fjrh.cn:85/h5/index.html"];

    NSURLRequest *request = [NSURLRequest requestWithURL:url];

    [ self.webView loadRequest:request];
    
    [self.view addSubview:self.webView];
    
}


- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    
    UIColor *mainColor = [UIColor colorWithRed:0 green:203/255.0 blue:171/255.0 alpha:1];
    UIEdgeInsets insets = self.view.window.safeAreaInsets;
    
    if(!_headView){
        _headView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, CGRectGetWidth(self.view.bounds), insets.top)];
        _headView.backgroundColor= mainColor;
        [self.view addSubview:_headView];
    }
    if(!_dragView){
        _dragView = [[WMDragView alloc]initWithFrame:CGRectMake(CGRectGetWidth(self.view.bounds) - 40,CGRectGetHeight(self.view.bounds)-40-insets.bottom , 40, 40)];
        _dragView.freeRect = CGRectMake(0, insets.top, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds)-insets.top-insets.bottom);
        _dragView.backgroundColor = mainColor;
        _dragView.layer.cornerRadius = 20;
        
        __weak typeof(self) weakSelf = self;
        _dragView.clickDragViewBlock = ^(WMDragView *dragView) {
            [weakSelf openCanvas];
        };
        
        [self.view addSubview:_dragView];
    }
}

#pragma mark - 打开画布
- (void)openCanvas {
    _drawingViewController.backgroundImage = [self snapshotCurrentFullScreen];
    [self presentViewController:_drawingViewController animated:NO completion:nil];
}

#pragma mark - 禁用旋转
- (BOOL)shouldAutorotate{
    
    return NO;
    
}

#pragma mark - WKScriptMessageHandler
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    NSLog(@"%@",NSStringFromSelector(_cmd));
    NSLog(@"%@",message.name);
    NSLog(@"%@",message.body);
    
    NSString *selName = [NSString stringWithFormat:@"%@:",message.name];
    SEL sel =  NSSelectorFromString(selName);
    if([self respondsToSelector:sel]){
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
        [self performSelector:sel withObject:message.body];
#pragma clang diagnostic pop

    }
}



//static NSString *OPEN_CAMERA = @"OpenCamera";                     // 开启拍照，并上传图片，单张
//static NSString *OPEN_PICK = @"openPick";                          //打开相册，并选择 1 张图片上传
//static NSString *OPEN_QRCODE = @"OpenQRcode";                      // 打开扫码识别界面
//static NSString *SEND_PRJ_SCREEN_IP = @"sendPrjScreenIP";           //  发送查询到的网关 IP，调用 window.getScreenIP(code)触发
//static NSString *SEND_START_BROADCAST = @"sendStartBroadcast";     //    发送开始广播
//static NSString *SEND_STOP_BRODCAST = @"sendStopBroadcast";          // 发送停止广播
//static NSString *OPEN_PRJ_SCREEN = @"openPrjScreen";                 //打开投屏界面
//static NSString *SEND_SYS_INFO = @"sendSystemInfo";                //  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
//static NSString *SEND_GROUP_MESSAGE = @"sendGroupMsg";            // 发送当前学生的最新小组信息

+ (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString {
    if (jsonString == nil) {
        return nil;
    }
    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSError *err;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData
                                                        options:NSJSONReadingMutableContainers
                                                          error:&err];
    if(err) {
        NSLog(@"json解析失败：%@",err);
        return nil;
    }
    return dic;
}

//  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
- (BOOL)sendSystemInfo:(NSString *)ips{

    self.ips =  [[self class] dictionaryWithJsonString:ips];
    
    return YES;
}

 // 发送开始广播
- (BOOL)sendStartBroadcast:(NSString *)type{
    NSLog(@"self.ips:%@",self.ips);
    NSLog(@"type:%@",type);
//    {"ViceScreenIP":"192.168.0.104","ViceBroadcast":"rtsp://183.250.202.41/0","MainBroadcast":"rtsp://192.168.0.108/0"}
    NSString *ip = nil;
    if([type isEqualToString:@"0"]){
        ip = self.ips[@"ViceBroadcast"];
    }else if([type isEqualToString:@"1"]){
        ip = self.ips[@"MainBroadcast"];
    }else if([type isEqualToString:@"10"]){
        ip = self.ips[@"MainBroadcast"];
    }

    if(!ip) return NO;
    
    if(!_playerViewController){
        _playerViewController = [[MediaPlayerViewController alloc] init];
    }
    _playerViewController.url = ip;
    [self presentViewController:_playerViewController animated:NO completion:nil];

    return YES;
}

// 发送停止广播
- (BOOL)sendStopBroadcast:(NSString *)type{
    [_playerViewController close];
    return YES;
}


#pragma mark - 调用JS事件
- (void)updateImage:(UIImage *)image{
    //    调用JS方法
    if(!image) return;
    NSData *data = UIImageJPEGRepresentation(image, 1.0f);
    NSString *encodedImageStr = [data base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
    NSLog(@"%@",encodedImageStr);
    
    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"uploadImage(`%@`)",encodedImageStr] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        //JS 返回结果
        NSLog(@"%@ %@",response,error);
    }];
}





#pragma mark - WKNavigationDelegate
// 页面开始加载时调用
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation{
    
}
// 当内容开始返回时调用
- (void)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation{
    
}

// 页面加载完成之后调用
- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation{
    
//    调用JS方法
//    [self.webView evaluateJavaScript:@"getStudentName()" completionHandler:^(id _Nullable response, NSError * _Nullable error) {
//        //JS 返回结果
//        NSLog(@"%@ %@",response,error);
//    }];
}

// 页面加载失败时调用
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation{
    
}


#pragma mark  -----截取当前屏幕全屏-----
- (UIImage *)snapshotCurrentFullScreen{
    _dragView.hidden = YES;
    // 判断是否为retina屏, 即retina屏绘图时有放大因子
    if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)]){
        
        UIGraphicsBeginImageContextWithOptions(self.view.window.bounds.size, NO, [UIScreen mainScreen].scale);
        
    } else {
        
        UIGraphicsBeginImageContext(self.view.window.bounds.size);
        
    }
    
    [self.view.window.layer renderInContext:UIGraphicsGetCurrentContext()];
    
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    
    UIGraphicsEndImageContext();
      _dragView.hidden = NO;
    return image;
}

@end
