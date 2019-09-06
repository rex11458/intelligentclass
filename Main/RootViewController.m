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
@interface RootViewController ()<WKNavigationDelegate,WKScriptMessageHandler>

@property (nonatomic) WKWebView *webView;

@end

@implementation RootViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    [self __configSubViews];
}

- (void)__configSubViews{
    
    WKUserContentController *userContent = [[WKUserContentController alloc] init];
    
    //JS调用OC 添加处理脚本
    [userContent addScriptMessageHandler:self name:@"showMobile"];
    [userContent addScriptMessageHandler:self name:@"showName"];
    [userContent addScriptMessageHandler:self name:@"showSendMsg"];
    
    
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
    
    NSLog(@"%@",self.view.window);
    
    UIEdgeInsets insets = self.view.window.safeAreaInsets;
    
    UIView *headView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, CGRectGetWidth(self.view.bounds), insets.top)];
    headView.backgroundColor= [UIColor colorWithRed:0 green:203/255.0 blue:171/255.0 alpha:1];
    [self.view addSubview:headView];
 
}


- (void)click{
    MediaPlayerViewController *playerViewController = [[MediaPlayerViewController alloc] init];
    playerViewController.url = @"rtsp://pb.fjrh.cn/0";
    [self presentViewController:playerViewController animated:NO completion:nil];
}




#pragma mark - 禁用旋转
- (BOOL)shouldAutorotate{
    
    return NO;
    
}

#pragma mark - WKScriptMessageHandler
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    NSLog(@"%@",NSStringFromSelector(_cmd));
    NSLog(@"%@",message.body);
    
    if ([message.name isEqualToString:@"showMobile"]) {
        [self showMsg:@"没有参数"];
    }
    
    if ([message.name isEqualToString:@"showName"]) {
        NSString *info = [NSString stringWithFormat:@"%@",message.body];
        [self showMsg:info];
    }
    
    if ([message.name isEqualToString:@"showSendMsg"]) {
        NSArray *array = message.body;
        NSString *info = [NSString stringWithFormat:@"有两个参数: %@, %@ !!",array.firstObject,array.lastObject];
        [self showMsg:info];
    }
}

- (void)showMsg:(NSString *)msg {
    [[[UIAlertView alloc] initWithTitle:nil message:msg delegate:nil cancelButtonTitle:nil otherButtonTitles:@"OK", nil] show];
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

@end
