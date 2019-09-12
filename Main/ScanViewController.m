//
//  ScanViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/12.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "ScanViewController.h"
#import "CDZQRScanView.h"


@interface ScanViewController ()<CDZQRScanDelegate>
{
    CDZQRScanView *_scanView;
}
@end

@implementation ScanViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self.view addSubview:self.scanView];
    [self.scanView startScanning];
}


- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    //
    
    [self __configSubViews];
 
}

- (void)__configSubViews{
    //    //播放区域
    UIEdgeInsets insets = self.view.window.safeAreaInsets;
    
    UIButton *backButton = [UIButton buttonWithType:UIButtonTypeSystem];
    [backButton setImage:[UIImage imageNamed:@"nav_back"] forState:UIControlStateNormal];
    [backButton addTarget:self action:@selector(dismiss) forControlEvents:UIControlEventTouchUpInside];
    backButton.tintColor = [UIColor whiteColor];
    backButton.frame = CGRectMake(20, insets.top + 10, 40, 40);
    
    [self.view addSubview:backButton];
}



- (CDZQRScanView *)scanView{
    if (!_scanView) {
        _scanView = [[CDZQRScanView alloc]initWithFrame:self.view.bounds];
        _scanView.delegate = self;
        _scanView.showBorderLine = YES;
    }
    return _scanView;
}


- (void)scanView:(CDZQRScanView *)scanView pickUpMessage:(NSString *)message{
    //do some thing you want,for example
    [scanView stopScanning];
   
    if(self.callback){
        [self dismiss];
        self.callback(message);
    }
}


- (void)showAlert:(NSString *)message action:(void(^)())action{
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:nil message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"好" style:UIAlertActionStyleCancel handler:action];
    [alert addAction:cancelAction];
    [self presentViewController:alert animated:YES completion:nil];
}



- (void)dismiss{
    [self dismissViewControllerAnimated:YES completion:^{
    }];
}

@end
