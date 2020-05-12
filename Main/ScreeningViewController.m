//
//  ScreeningViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/15.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "ScreeningViewController.h"
#import "ScanViewController.h"
#import <ReplayKit/ReplayKit.h>
#import "RootViewController.h"
#import "SocketManager.h"
#import "ScreeningDetailViewController.h"
#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

static NSString *const H264FilePath = @"test.h264";

@interface ScreeningViewController ()<UITextFieldDelegate,GCDAsyncSocketDelegate>
{
    NSString *_code;
    ScreeningDetailViewController *_detailViewController;
    
    RPSystemBroadcastPickerView *_pickView;
}

@property (nonatomic, strong) GCDAsyncSocket *socket;
@property (readonly) NSMutableSet *connectedSockets;

@property (strong, nonatomic) IBOutlet UIView *saomaView;
@property (strong, nonatomic) IBOutlet UIView *toupingmaView;
@property (strong, nonatomic) IBOutlet UIButton *saoyisaoButton;
@property (strong, nonatomic) IBOutlet UIButton *toupingmaButton;
@property (strong, nonatomic) IBOutlet UIButton *startToupingAction;

@property (strong, nonatomic) IBOutletCollection(UILabel) NSArray *textLabel;

@property (strong, nonatomic) IBOutlet UITextField *textField;


@property (strong, nonatomic) IBOutlet UILabel *groupNameLabel;
@property (strong, nonatomic) IBOutlet UILabel *memberLabel;
@property (strong, nonatomic) IBOutlet UIView *groupView;

@property (nonatomic,strong)NSFileHandle *h264FileHandle; //句柄

@end

@implementation ScreeningViewController
{
    UIButton * _actionButton;
}
- (void)dealloc{
    [[NSNotificationCenter defaultCenter] removeObserver:self name:UITextFieldTextDidChangeNotification object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:SocketdidReceivedStartPrjScreenNotification object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:SocketdidReceivedPausePrjScreenNotification object:nil];

    [[NSNotificationCenter defaultCenter] removeObserver:self name:SocketdidReceivedStopPrjScreenNotification object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:UIScreenCapturedDidChangeNotification object:nil];

}


- (void)startTcpServer{
    _connectedSockets = [NSMutableSet new];
    if(!self.socket){
        self.socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_global_queue(0, 0)];
    }
  
    NSError *error = nil;
    BOOL result =  [self.socket acceptOnPort:9999 error:&error];

    if(!result){
        NSLog(@"%@",error);
    }else{
        NSLog(@"server start at port 9999....");

    }
}

- (void)stopTcpServer{
    self.socket = nil;
}


- (void)socket:(GCDAsyncSocket *)sock didAcceptNewSocket:(GCDAsyncSocket *)newSocket;
{
    [self.connectedSockets addObject:newSocket];

    NSLog(@"[Server] didAcceptNewSocket. socket = %@",sock);
    [newSocket readDataWithTimeout:-1 tag:0];
}

- (void)socketDidDisconnect:(GCDAsyncSocket *)socket withError:(NSError *)error;
{
    NSLog(@"[Server] socketDidDisconnect. socket:%@",socket);
    [self.connectedSockets removeObject:socket];
//    dispatch_async(dispatch_get_main_queue(), ^{
//        NSString *filePath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject] stringByAppendingPathComponent:H264FilePath];
//        NSURL *fileURL = [[NSURL alloc] initFileURLWithPath:filePath];
//
//        UIActivityViewController *vc = [[UIActivityViewController alloc] initWithActivityItems:@[fileURL] applicationActivities:nil];
//
//        [[RootViewController sharedRootViewController] presentViewController:vc animated:YES completion:nil];
//    });
}



- (void)socket:(GCDAsyncSocket *)sock didReadData:(NSData *)data withTag:(long)tag;
{
//    [self.h264FileHandle writeData:data];
    [[RootViewController sharedRootViewController] sendSteam:data];
    
    [sock readDataWithTimeout:-1 tag:0];
}

#pragma mark - private Methods
- (void)configFileHandle{
    NSString *filePath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject] stringByAppendingPathComponent:H264FilePath];
    NSFileManager *fileManager = [NSFileManager defaultManager];
    //文件存在的话先删除文件
    if ([fileManager fileExistsAtPath:filePath]) {
        [fileManager removeItemAtPath:filePath error:nil];
    }
    [fileManager createFileAtPath:filePath contents:nil attributes:nil];
    self.h264FileHandle = [NSFileHandle fileHandleForWritingAtPath:filePath];
    
    if (!self.h264FileHandle) {
        NSLog(@"创建H264文件句柄失败");
    }
}


- (void)viewDidLoad {
    [super viewDidLoad];
//    [self configFileHandle];
    _detailViewController = [ScreeningDetailViewController new];
    _detailViewController.screeningViewController = self;
    [self startTcpServer];
    self.textField.keyboardType = UIKeyboardTypeASCIICapable;
    self.textField.autocorrectionType = UITextAutocorrectionTypeNo;
    self.groupView.hidden = YES;
    // Do any additional setup after loading the view from its nib.
    [[NSNotificationCenter defaultCenter] addObserverForName:UITextFieldTextDidChangeNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
        [self changeText];
    }];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(connect:) name:SocketdidReceivedStartPrjScreenNotification object:nil] ;
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(pause:) name:SocketdidReceivedPausePrjScreenNotification object:nil] ;
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(stop:) name:SocketdidReceivedStopPrjScreenNotification object:nil] ;

    [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(captureStatusChanged:) name:UIScreenCapturedDidChangeNotification object:nil];
}

- (void)setIsScreening:(BOOL)isScreening{
    _isScreening = isScreening;
    
    if(_isScreening){
        [self addChildViewController:_detailViewController];
        _detailViewController.view.frame = self.view.bounds;
        [self.view addSubview:_detailViewController.view];
        [_detailViewController startTimer];

    }else{
        [_detailViewController removeFromParentViewController];
        [_detailViewController.view removeFromSuperview];
        [_detailViewController resetTimer];
    }
}

- (void)setUserName:(NSString *)userName{
    _userName = [userName copy];
    _detailViewController.userName = _userName;
}


- (void)setGroupInfo:(NSDictionary *)groupInfo{
    _groupInfo = groupInfo;
    _groupView.hidden = NO;
//    "isJoin":true,"groupIp":"192.168.0.13","groupName":"1","maxUser":2,"connectUser":1
    _groupNameLabel.text = groupInfo[@"groupName"];
    _memberLabel.text = [NSString stringWithFormat:@"成员：%@/%@",groupInfo[@"connectUser"],groupInfo[@"maxUser"]];
}


- (IBAction)openScanning:(id)sender {
    
//    [[RootViewController sharedRootViewController] connetHost:@"192.168.7.50"];
//
//    return ;
    ScanViewController *vc = [[ScanViewController alloc] init];
    [self addChildViewController:vc];
    vc.view.frame = self.view.bounds;
    [self.view addSubview:vc.view];
    
//    typeof(self) weakSelf = self;
    vc.callback = ^(NSString * value){
        
       NSArray *ips = [value componentsSeparatedByString:@"|"];
        
        
        
        [[RootViewController sharedRootViewController] connetHost:ips.firstObject];
//        [weakSelf connect:qrcode];
    };
}

- (IBAction)startTouping:(id)sender {
    [[RootViewController sharedRootViewController] getScreenIP:self.textField.text];
    [self.textField resignFirstResponder];
    self.textField.text = @"";
    [self changeText];
}

- (IBAction)groupSendToupingAction:(id)sender {
    //小组投屏
    NSString *groupIp = self.groupInfo[@"groupIp"];
    
    [[RootViewController sharedRootViewController] connetHost:groupIp];

}

- (IBAction)saoyisaoAction:(UIButton *)sender {
    [self.textField resignFirstResponder];
    _saoyisaoButton.selected = YES;
    _toupingmaButton.selected = NO;
    
    _saomaView.hidden = NO;
    _toupingmaView.hidden = YES;
}

- (IBAction)toupingmaAction:(UIButton *)sender {
    _saoyisaoButton.selected = NO;
    _toupingmaButton.selected = YES;
    
    _saomaView.hidden = YES;
    _toupingmaView.hidden = NO;
}

- (IBAction)back:(id)sender {
    
    [self removeFromParentViewController];
    [self.view removeFromSuperview];
}

- (void)close{
    [self removeFromParentViewController];
    [self.view removeFromSuperview];

}

- (UILabel *)getCurrentLabel:(NSInteger)tag{
   __block UILabel *label = nil;
    [self.textLabel enumerateObjectsUsingBlock:^(UILabel * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        
        if (obj.tag == tag) {
            label = obj;
        }
        
    }];
    
    return label;
}

- (void)changeText{
    self.startToupingAction.enabled = [self.textField.text length];
    [self.textLabel enumerateObjectsUsingBlock:^(UILabel * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        obj.text = @"";
    }];
    for(int i =0; i < [self.textField.text length]; i++){
        
        NSString *text = [self.textField.text substringWithRange:NSMakeRange(i, 1)];
        UILabel *label = [self getCurrentLabel:i];
        label.text = text;
    }
}

#pragma mark - UITextFieldDelegate
- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string{

    if(textField.text.length == 4){
    
        if (![string isEqualToString:@""]) {
            
            
            return NO;
        }
    
    }
    
    return YES;
}


#pragma mark - 请求投屏
- (void)connect:(NSNotification *)note{
    BOOL isCaptured = [UIScreen mainScreen].isCaptured;
    if(!isCaptured){
        
        RPSystemBroadcastPickerView *pickView = [[RPSystemBroadcastPickerView alloc] initWithFrame:CGRectMake(0, 0, 50, 50)];
        pickView.center = self.view.center;
        pickView.preferredExtension = @"com.ruihe.student.upload";
        pickView.showsMicrophoneButton = false;
        [self.view addSubview:pickView];
        
        for (UIView *item in pickView.subviews) {
            if ([item isKindOfClass:UIButton.class] == YES) {
                _actionButton = (UIButton*)item;
                _actionButton.enabled = NO;
            }
        }
        
        [NSObject cancelPreviousPerformRequestsWithTarget:self selector:@selector(openCaptureScreen:) object:_pickView];
        [self performSelector:@selector(openCaptureScreen:) withObject:pickView afterDelay:1];
        _pickView = pickView;
//        [self openCaptureScreen:pickView];
    }else{
        self.isScreening = true;
    }
}

- (void)openCaptureScreen:(RPSystemBroadcastPickerView *)pickView{
    dispatch_async(dispatch_get_main_queue(), ^{
              if(@available(iOS 13, *)){
                  
                  [self->_actionButton sendActionsForControlEvents:UIControlEventTouchUpInside];
                  
              }else{
                  [self->_actionButton sendActionsForControlEvents:UIControlEventTouchDown];
                  
              }
              [pickView removeFromSuperview];
          });
}


- (void)pause:(NSNotification *)note{
    [_detailViewController pauseTimer];
}

- (void)stop:(NSNotification *)note{
    self.isScreening = false;

}

- (void)captureStatusChanged:(NSNotification *)note{

    BOOL isCaptured = [UIScreen mainScreen].isCaptured;

    if(!isCaptured){
        [[RootViewController sharedRootViewController] cutOff];
    }
    
    [self setIsScreening:isCaptured];
    [[RootViewController sharedRootViewController] setActiveScreenIp];
    
}

- (void)sendStopScreening{
    
    RPSystemBroadcastPickerView *pickView = [[RPSystemBroadcastPickerView alloc] initWithFrame:CGRectMake(0, 0, 50, 50)];
    pickView.center = self.view.center;
    pickView.preferredExtension = @"com.fjrh.intelligentclass.intelligentclassSetup";
    pickView.showsMicrophoneButton = false;
    [self.view addSubview:pickView];
    
    for (UIView *item in pickView.subviews) {
        if ([item isKindOfClass:UIButton.class] == YES) {
            _actionButton = (UIButton*)item;
        }
    }
    dispatch_async(dispatch_get_main_queue(), ^{
        if(@available(iOS 13, *)){
            [self->_actionButton sendActionsForControlEvents:UIControlEventTouchUpInside];
            
        }else{
            [self->_actionButton sendActionsForControlEvents:UIControlEventTouchDown];
            
        }
        [pickView removeFromSuperview];
    });
    
    
//    NSString *key = @"kStopScreenNotification";
//    CFNotificationCenterRef const center = CFNotificationCenterGetDarwinNotifyCenter();
//    CFDictionaryRef const userInfo = NULL;
//    BOOL const deliverImmediately = YES;
//    CFNotificationCenterPostNotification(center,
//                                         (CFStringRef)key, NULL, userInfo, deliverImmediately);
}

@end
