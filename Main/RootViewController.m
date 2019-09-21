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
@interface RootViewController ()<WKScriptMessageHandler,UINavigationControllerDelegate,UIImagePickerControllerDelegate>
{
  
    UIView *_headView;
    WMDragView *_dragView;
    
    NSString *_broadcastType;
    
}

@property (strong, nonatomic) IBOutlet UUWebView *webView;

@property(nonatomic) NSDictionary *ips;

@property (nonatomic) NSString *currentUserName;

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
    _playerViewController = [MediaPlayerViewController new];
    
}


- (void)__configSubViews{
    NSString *root = [[NSBundle mainBundle] pathForResource:@"dist/index" ofType:@"html"];
    NSURL *url = [[NSURL alloc] initFileURLWithPath:root];
//  NSURL *url = [NSURL URLWithString:@"http://pb.fjrh.cn:85/h5/index.html"];

    NSURLRequest *request = [NSURLRequest requestWithURL:url];

    [ self.webView loadRequest:request];
    
    [self.view addSubview:self.webView];
    
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
            [weakSelf OpenCamera:nil];
        };

        [self.view addSubview:_dragView];
    }
}

#pragma mark - 打开画布
- (void)openCanvas {
    _drawingViewController.backgroundImage = [self snapshotCurrentFullScreen];
    [self addChildViewController:_drawingViewController];
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
    
    return YES;
}


// 获取用户IP
- (NSString *)GetIPAdress:(id)sender{
    NSString *ip = [Utils getIPAddress];
    NSLog(@"\nlocal ip=%@\n",ip);

    return ip;
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

 // 发送开始广播
- (BOOL)sendStartBroadcast:(NSString *)type{
    NSLog(@"self.ips:%@",self.ips);
    NSLog(@"type:%@",type);
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

    
    if(!ip) return NO;
//
//    if([_playerViewController.url isEqualToString:ip] && _playerViewController.isPlaying){
//        return YES;
//    }
//
    [self rotation:UIInterfaceOrientationLandscapeRight];
    
    _playerViewController.url = ip;
    
    [self addChildViewController:_playerViewController];
    [self.view addSubview:_playerViewController.view];
    
    
    [_playerViewController play];
    
    return YES;
}

// 发送停止广播
- (BOOL)sendStopBroadcast:(NSString *)type{
    [_playerViewController close];
    return YES;
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
    
    NSURLSession *session=[NSURLSession sharedSession];
    NSURLSessionDataTask *dataTask = [session dataTaskWithURL:[NSURL URLWithString:urlString] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error){
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
    
        [self presentViewController:vc animated:YES completion:nil];
    
    }];
    
    //4.执行任务
    [dataTask resume];
    
    return YES;
}

// 打开投屏界面
- (BOOL)openPrjScreen:(id)sender{
    ScreeningViewController *vc = [ScreeningViewController new];
    vc.groupInfo = self.groupInfo;
    
    [self addChildViewController:vc];
    vc.view.frame = self.view.bounds;
    [self.view addSubview:vc.view];
    
    
    return YES;
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


@end
