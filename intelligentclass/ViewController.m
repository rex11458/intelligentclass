//
//  ViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/5.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "ViewController.h"
#import <WebKit/WebKit.h>
@interface ViewController ()

@property (nonatomic) WKWebView *webView;

@end

@implementation ViewController

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
   
}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    
    NSLog(@"%@",self.view.window);
    
    UIEdgeInsets insets = self.view.window.safeAreaInsets;
    
    UIView *headView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, CGRectGetWidth(self.view.bounds), insets.top)];
    headView.backgroundColor= [UIColor colorWithRed:0 green:203/255.0 blue:171/255.0 alpha:1];
    [self.view addSubview:headView];
}

@end
