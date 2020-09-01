//
//  RootViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "RootViewController.h"
#import <WebKit/WebKit.h>
#import "WMDragView.h"
#import "UIImage+Extensions.h"
#import "ScanViewController.h"
#import "ScreeningViewController.h"
#import "UUWebView.h"
#import "Utils.h"
#import "RotateNavigationController.h"
#import "SocketManager.h"
@interface RootViewController ()<WKScriptMessageHandler,WKNavigationDelegate,UINavigationControllerDelegate,UIImagePickerControllerDelegate>
{
    
    SocketManager *_socketManager;
    UIView *_headView;
    WMDragView *_dragView;
    
    NSString *_broadcastType;
    
}

@property (strong, nonatomic) IBOutlet UUWebView *webView;

@property(nonatomic) NSDictionary *ips;


@property (nonatomic) NSDictionary *groupInfo;

@end

@implementation RootViewController

static RootViewController  *g_rootViewController = nil;

- (void)awakeFromNib{
    [super awakeFromNib];

    g_rootViewController = self;
}

- (instancetype)init{
    if(self = [super init]){
        g_rootViewController = self;
    }
    
    return self;
}


+ (RootViewController *)sharedRootViewController{
    return g_rootViewController;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    [self __configSubViews];
    
    _drawingViewController = [DrawingViewController new];
    _playerViewController = [VLCMediaPlayerViewController new];
    _screeningViewController = [ScreeningViewController new];
    _socketManager = [SocketManager manager];
}


- (void)__configSubViews{
    
    self.webView.navigationDelegate = self;
    
    NSString *root = [[NSBundle mainBundle] pathForResource:@"dist/index" ofType:@"html"];

    NSURL *url = [[NSURL alloc] initFileURLWithPath:root];

    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    
    [ self.webView loadRequest:request];
}

- (void)reset{
    
    NSString *root = [[NSBundle mainBundle] pathForResource:@"dist/index" ofType:@"html"];

    NSURL *url = [[NSURL alloc] initFileURLWithPath:root];
 
    [self reloadWithUrl:url];
    
}

- (void)reloadWithUrl:(NSURL *)url{
    
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
      
      [ self.webView loadRequest:request];
    
}


- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];

    if(!_dragView){
    
        UIColor *mainColor = [UIColor colorWithRed:0 green:203/255.0 blue:171/255.0 alpha:1];
        UIEdgeInsets insets = self.view.window.safeAreaInsets;
        _dragView = [[WMDragView alloc]initWithFrame:CGRectMake(CGRectGetWidth(self.view.bounds) - 40,CGRectGetHeight(self.view.bounds)-40-insets.bottom , 40, 40)];
        _dragView.freeRect = CGRectMake(0, insets.top, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds)-insets.top-insets.bottom);
        _dragView.backgroundColor = mainColor;
        _dragView.layer.cornerRadius = 20;
        _dragView.imageView.image = [UIImage imageNamed:@"icon_pencil"];
        _dragView.imageView.contentMode = UIViewContentModeCenter;
        __weak typeof(self) weakSelf = self;
        _dragView.clickDragViewBlock = ^(WMDragView *dragView) {

            //TODO:
//             [weakSelf openPrjScreen:nil];
//            [weakSelf sendStartBroadcast:nil];
           [weakSelf openCanvas];
//            [weakSelf openMultiPointPrj:@"192.168.7.50,192.168.5.62"];

        };

        [self.view addSubview:_dragView];
    }
}

#pragma mark - 打开画布
- (void)openCanvas {
//    _drawingViewController.backgroundImage = [self snapshotCurrentFullScreen];
    [self addChildViewController:_drawingViewController];
    _drawingViewController.view.frame = self.view.bounds;
    [self.view addSubview:_drawingViewController.view];
}


#pragma mark - WKScriptMessageHandler
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {

    NSLog(@"    \n%@:%@\n",message.name,message.body);
    
    NSString *selName = [NSString stringWithFormat:@"%@:",message.name];
    SEL sel =  NSSelectorFromString(selName);
    if([self respondsToSelector:sel]){
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
        [self performSelector:sel withObject:[NSString stringWithFormat:@"%@",message.body]];
#pragma clang diagnostic pop

    }
}

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


// 登录后触发
- (BOOL)login:(id)sender{
    //获取登录用户信息
    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"getStudentName()"] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        self.currentUserName = response;
        NSLog(@"\ncurrentUserName=%@\n",self.currentUserName);
    }];
    
    [self sendIpAddress];
    return YES;
}


// 获取用户IP
- (NSString *)GetIPAdress:(id)sender{
    [self sendIpAddress];

    NSString *ip = [Utils getIPAddress];
    NSLog(@"\nlocal ip=%@\n",ip);

    return ip;
}

- (void)sendIpAddress{
    NSString *ip = [Utils getIPAddress];

    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"receiveIP('%@')",ip] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"endIpAddress:%@\n",error);

    }];
}


//  发送屏幕广播配置信息(登录后会下发,副屏 ip 地址是当前用户投屏到副屏时， 判断不接收副屏广播)
- (BOOL)sendSystemInfo:(NSString *)ips{
    self.ips =  [[self class] dictionaryWithJsonString:ips];
    
    return YES;
}


//最新小组信息
- (BOOL)sendGroupMsg:(NSString *)groupMsg{
    
    self.groupInfo = [[self class] dictionaryWithJsonString:groupMsg];
    
    return YES;
}

//通过url来播放rtsp流
- (BOOL)sendStartBroadcastByUrl:(NSString *)url{
    NSLog(@"sendStartBroadcastByUrl = %@",url);
        [self sendToPath:nil];
         NSString *ip = url;
    
         if(!ip) return NO;
         
         [self rotation:UIInterfaceOrientationLandscapeRight];
         
         _playerViewController.url = ip;
         
         [self addChildViewController:_playerViewController];
         _playerViewController.view.frame = self.view.bounds;
         [self.view addSubview:_playerViewController.view];
         
         [_playerViewController play];
         
         return YES;
    
}

 // 发送开始广播
- (BOOL)sendStartBroadcast:(NSString *)type{
    NSString *ip = nil;
    if([type isEqualToString:@"0"]){
        _broadcastType = @"0";
        ip = self.ips[@"ViceBroadcast"];
    }else if([type isEqualToString:@"1"]){
        ip = self.ips[@"MainBroadcast"];
        _broadcastType = @"1";
        
    }else if([type isEqualToString:@"10"]){
        ip = self.ips[@"MainBroadcast"];
        if([_broadcastType isEqualToString:@"0"]){
            ip = self.ips[@"ViceBroadcast"];
        }
    }

    return [self sendStartBroadcastByUrl:ip];
}

// 发送停止广播
- (BOOL)sendStopBroadcast:(NSString *)type{
    [_playerViewController close];
    _broadcastType = @"1";

    return YES;
}


//关闭自己打开的页面
- (void)sendToPath:(NSString *)path{
    [self.playerViewController close];
    [self.drawingViewController close];
    [self.screeningViewController close];
}

//选择相册
- (void)openPick:(id)sender{
    
    [self openPhotoLibrary: UIImagePickerControllerSourceTypePhotoLibrary];
  
}

//打开相机
- (void)OpenCamera:(id)sender{
    [self openPhotoLibrary: UIImagePickerControllerSourceTypeCamera];
}

// 扫码签到
-(void)OpenQRcode:(id)sender{
    ScanViewController *vc = [[ScanViewController alloc] init];
    [self addChildViewController:vc];
    vc.view.frame = self.view.bounds;
    [self.view addSubview:vc.view];
    
    typeof(self) weakSelf = self;
    vc.callback = ^(NSString * qrcode){
        [weakSelf.webView evaluateJavaScript:[NSString stringWithFormat:@"acceptQRcode(`%@`)",qrcode] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
            //JS 返回结果
            NSLog(@"%@ %@",response,error);
            
        }];
    
    };
}

#pragma mark - 文件下载
- (BOOL)downloadFile:(NSString *)urlString{
    
    NSLog(@"fileURL:%@",urlString);
    if(!urlString) return NO;
    NSURLSession *session=[NSURLSession sharedSession];
    NSURLSessionDataTask *dataTask = [session dataTaskWithURL:[NSURL URLWithString:urlString] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error){
        if(!error){
            NSHTTPURLResponse *res = (NSHTTPURLResponse *) response;
            
            NSDictionary *headerFiles = res.allHeaderFields;
            NSString *disposition = headerFiles[@"Content-Disposition"];
            
            //        NSLog(@"fileName=%@",fileName);
            NSString *fileName = nil;
            NSRange range = [disposition rangeOfString:@"\"(.+)\"" options:NSRegularExpressionSearch];
            if (range.location != NSNotFound) {
                fileName = [disposition substringWithRange:NSMakeRange(range.location + 1, range.length - 2)];
            }
            
            NSString *filePath = [ [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0] stringByAppendingPathComponent:[fileName stringByRemovingPercentEncoding]];
            [data writeToFile:filePath atomically:YES];
            NSURL *fileURL = [[NSURL alloc] initFileURLWithPath:filePath];
            
            UIActivityViewController *vc = [[UIActivityViewController alloc] initWithActivityItems:@[fileURL] applicationActivities:nil];
            dispatch_async(dispatch_get_main_queue(), ^{
                [self presentViewController:vc animated:YES completion:nil];

            });
        }
    }];
    
    //4.执行任务
    [dataTask resume];
    
    return YES;
}

// 打开投屏界面
- (BOOL)openPrjScreen:(id)sender{
  
    //获取登录用户信息
    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"getStudentName()"] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        self.currentUserName = response;
        NSLog(@"\ncurrentUserName=%@\n",self.currentUserName);
    }];
    
    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"getScreenStatus()"] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        //JS 返回结果
        
        if([response boolValue]){
            [self openSendScreenWithUIHidden:NO];
        }
        
    }];
 
    
    return YES;
}


- (void)openSendScreenWithUIHidden:(BOOL)hidden{
    _screeningViewController.view.hidden = hidden;
    [self addChildViewController:_screeningViewController];
    _screeningViewController.view.frame = self.view.bounds;
    [self.view addSubview:_screeningViewController.view];
    [self.view bringSubviewToFront:_dragView];
    _screeningViewController.isScreening = _socketManager.isStreaming;
    _screeningViewController.userName = self.currentUserName;
    if(self.groupInfo){
        _screeningViewController.groupInfo = self.groupInfo;
    }
}




- (void)getScreenIP:(NSString *)code{
    
    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"getScreenIP(`%@`)",code] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        //JS 返回结果

        NSLog(@"%@ %@",response,error);

    }];
}

- (void)sendPrjScreenIP:(NSString *)ip{
    
    [self connetHost:ip];
    
    NSLog(@"%@,%@",NSStringFromSelector(_cmd) , ip);
}


- (void)connetHost:(NSString *)host{
    if(!host){
        return ;
    }
    [_socketManager connetHosts:@[host] port:9111];
}


- (void)sendSteam:(NSData *)data{
    [_socketManager sendSteam:data];
}


- (void)cutOff{
    [_socketManager disconnect];
}

- (void)openMultiPointPrj:(NSString *)ips{
     [self sendToPath:nil];
    [self openSendScreenWithUIHidden:YES];
    [_socketManager connetHosts:[ips componentsSeparatedByString:@","] port:9111];

}

- (void)closeMultiPointPrj:(NSString *)ips{
    [_socketManager disconnect];
    
    [_screeningViewController.view removeFromSuperview];
    [_screeningViewController removeFromParentViewController];
}


/*记录主动投屏IP,告诉h5*/
- (void)setActiveScreenIp{
    
    NSString *ips = [_socketManager.streamingIps componentsJoinedByString:@","];
    
        
      [self.webView evaluateJavaScript:[NSString stringWithFormat:@"setActiveScreenIp(`%@`)",ips] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
          //JS 返回结果
          NSLog(@"%@ %@",response,error);

      }];
    
}



#pragma mark - 调用JS事件
- (void)updateImage:(UIImage *)image{
    //    调用JS方法
    if(!image) return;
    
    int max_size = 1024 * 1024 * 2;

    NSData *data =  [image compressQualityWithMaxLength:max_size];
    NSString *base64String = [data base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];

    NSString *encodedImageStr = [NSString stringWithFormat:@"data:image/jpg;base64,%@",base64String];
    
    [self.webView evaluateJavaScript:[NSString stringWithFormat:@"uploadImage(`%@`)",encodedImageStr] completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        //JS 返回结果
        NSLog(@"%@ %@",response,error);

    }];
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



#pragma mark - 打开相机、相册
- (void)openPhotoLibrary:(UIImagePickerControllerSourceType)sourceType{
    if ([UIImagePickerController isSourceTypeAvailable:sourceType]) {
        // 实例化UIImagePickerController控制器
        UIImagePickerController * imagePickerVC = [[UIImagePickerController alloc] init];
        // 设置资源来源（相册、相机、图库之一）
        imagePickerVC.sourceType = sourceType;
        imagePickerVC.delegate = self;
        // 是否允许编辑（YES：图片选择完成进入编辑模式）
        imagePickerVC.allowsEditing = false;
        // model出控制器
        
        [self addChildViewController:imagePickerVC];
        imagePickerVC.view.frame = self.view.bounds;
        [self.view addSubview:imagePickerVC.view];
    }
}


#pragma mark - UIImagePickerControllerDelegate
// 选择图片成功调用此方法
- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary<NSString *,id> *)info {
    
    [picker.view removeFromSuperview];
    [picker removeFromParentViewController];
    
    
    // 选择的图片信息存储于info字典中
    NSLog(@"%@", info);
    UIImage *image = info[@"UIImagePickerControllerOriginalImage"];
    [self updateImage:image];
}


// 取消图片选择调用此方法
- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker {
    
    // dismiss UIImagePickerController

    [picker.view removeFromSuperview];
    [picker removeFromParentViewController];
    
}


- (void)rotation:(UIInterfaceOrientation)orientation{
    RotateNavigationController *navigationController = (RotateNavigationController *)self.navigationController;
    if(orientation == UIInterfaceOrientationPortrait){
        navigationController.interfaceOrientation = UIInterfaceOrientationPortrait;
        navigationController.interfaceOrientationMask = UIInterfaceOrientationMaskPortrait;
        //设置屏幕的转向为竖屏
        [[UIDevice currentDevice] setValue:@(UIDeviceOrientationPortrait) forKey:@"orientation"];

    }else{
        navigationController.interfaceOrientation = UIInterfaceOrientationLandscapeRight;
        navigationController.interfaceOrientationMask = UIInterfaceOrientationMaskLandscapeRight;
        //设置屏幕的转向为横屏
        [[UIDevice currentDevice] setValue:@(UIDeviceOrientationLandscapeRight) forKey:@"orientation"];
    }
    [UIViewController attemptRotationToDeviceOrientation];
}



- (BOOL)shouldAutorotate {
    return YES;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskPortrait ;
}

- (UIInterfaceOrientation)preferredInterfaceOrientationForPresentation {
    return UIInterfaceOrientationPortrait;
}




- (void)startPlay{
    if(self.view.subviews.lastObject == _playerViewController.view){
        [_playerViewController play];
    }
}

- (void)stopPlay{
    if(self.view.subviews.lastObject == _playerViewController.view){
        [_playerViewController shutdown];
    }
}


#pragma mark - UINavigationControllerDelegate
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler{
    
    NSString *url = navigationAction.request.URL.absoluteString;
    
    if([url containsString:@"http://turn.html/?"]){
        decisionHandler(WKNavigationActionPolicyCancel);
        
       url = [url stringByReplacingOccurrencesOfString:@"http://turn.html/?" withString:@""];
        [self reloadWithUrl:[NSURL URLWithString:url]];
        
    }else if([url containsString:@"http://logout.html/?"]){
        
        decisionHandler(WKNavigationActionPolicyCancel);
        url = [url stringByReplacingOccurrencesOfString:@"http://logout.html/?" withString:@""];
            
        [self reloadWithUrl:[NSURL URLWithString:url]];
        
        
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            [self reset];
        });
        
    }else{
        decisionHandler(WKNavigationActionPolicyAllow);
    }
}

@end
