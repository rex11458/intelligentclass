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
@interface RootViewController ()

@property (nonatomic) WKWebView *webView;

@end

@implementation RootViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    [self __configSubViews];
}

- (void)__configSubViews{
    
    
    CGRect frame = CGRectMake(0, 0, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds) );

    WKWebViewConfiguration *config = [WKWebViewConfiguration new];

    self.webView = [[WKWebView alloc] initWithFrame:frame configuration:config];


    NSString *root = [[NSBundle mainBundle] pathForResource:@"dist/index" ofType:@"html"];

    NSURL *url = [[NSURL alloc] initFileURLWithPath:root];
    //    NSURL *url = [NSURL URLWithString:@"http://pb.fjrh.cn:85/h5/index.html"];

    NSURLRequest *request = [NSURLRequest requestWithURL:url];

    [ self.webView loadRequest:request];

    [self.view addSubview:self.webView];
    
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame =CGRectMake(0, 100, 100, 40);
    [btn setTitle:@"播放按钮" forState:UIControlStateNormal];
    [btn setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(click) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
    [self.view bringSubviewToFront:btn];
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
    playerViewController.url = [NSURL URLWithString:@"rtsp://pb.fjrh.cn/0"];
    [self presentViewController:playerViewController animated:NO completion:nil];
}

@end
