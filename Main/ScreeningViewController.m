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

#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>


@interface ScreeningViewController ()<UITextFieldDelegate,GCDAsyncSocketDelegate,RPBroadcastActivityViewControllerDelegate, RPBroadcastControllerDelegate>
{
    NSString *_code;
}

@property (nonatomic, strong) GCDAsyncSocket *socket;
@property (readonly) NSMutableSet *connectedSockets;

@property (strong, nonatomic) IBOutlet UIView *saomaView;
@property (strong, nonatomic) IBOutlet UIView *toupingmaView;
@property (strong, nonatomic) IBOutlet UIButton *saoyisaoButton;
@property (strong, nonatomic) IBOutlet UIButton *toupingmaButton;
@property (strong, nonatomic) IBOutlet UIButton *startToupingAction;

@property (strong, nonatomic) IBOutletCollection(UILabel) NSArray<UILabel *> *textLabel;

@property (strong, nonatomic) IBOutlet UITextField *textField;

@property (nonatomic, strong) RPBroadcastActivityViewController *boradcastViewController;
@property (nonatomic, strong) RPBroadcastController *broadcastController;
@property (strong, nonatomic) IBOutlet UILabel *groupNameLabel;
@property (strong, nonatomic) IBOutlet UILabel *memberLabel;
@property (strong, nonatomic) IBOutlet UIView *groupView;

@end

@implementation ScreeningViewController

- (void)dealloc{
    [[NSNotificationCenter defaultCenter] removeObserver:self name:UITextFieldTextDidChangeNotification object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:SocketdidReceivedStartPrjScreenNotification object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:SocketdidReceivedStopPrjScreenNotification object:nil];
    
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

    NSLog(@"[Server] New connection.");
    [newSocket readDataWithTimeout:-1 tag:0];
}

- (void)socketDidDisconnect:(GCDAsyncSocket *)socket withError:(NSError *)error;
{
    [self.connectedSockets removeObject:socket];
}



- (void)socket:(GCDAsyncSocket *)sock didReadData:(NSData *)data withTag:(long)tag;
{
    
    [[RootViewController sharedRootViewController] sendSteam:data];
    
    [sock readDataWithTimeout:-1 tag:0];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self startTcpServer];
    
    self.groupView.hidden = YES;
    // Do any additional setup after loading the view from its nib.
    [[NSNotificationCenter defaultCenter] addObserverForName:UITextFieldTextDidChangeNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
        [self changeText];
    }];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(connect:) name:SocketdidReceivedStartPrjScreenNotification object:nil] ;
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(stop:) name:SocketdidReceivedStopPrjScreenNotification object:nil] ;

}


- (void)setGroupInfo:(NSDictionary *)groupInfo{
    _groupInfo = groupInfo;
    _groupView.hidden = NO;
//    "isJoin":true,"groupIp":"192.168.0.13","groupName":"1","maxUser":2,"connectUser":1
    _groupNameLabel.text = groupInfo[@"groupName"];
    _memberLabel.text = [NSString stringWithFormat:@"成员：%@/%@",groupInfo[@"connectUser"],groupInfo[@"maxUser"]];
}


- (IBAction)openScanning:(id)sender {
    ScanViewController *vc = [[ScanViewController alloc] init];
    [self addChildViewController:vc];
    vc.view.frame = self.view.bounds;
    [self.view addSubview:vc.view];
    
//    typeof(self) weakSelf = self;
    vc.callback = ^(NSString * ip){
        [[RootViewController sharedRootViewController] connetHost:ip];
//        [weakSelf connect:qrcode];
    };
}

- (IBAction)startTouping:(id)sender {
    [[RootViewController sharedRootViewController] getScreenIP:self.textField.text];
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

- (void)changeText{
    self.startToupingAction.enabled = [self.textField.text length];
    [self.textLabel enumerateObjectsUsingBlock:^(UILabel * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        obj.text = @"";
    }];
    for(int i =0; i < [self.textField.text length]; i++){
        
        NSString *text = [self.textField.text substringWithRange:NSMakeRange(i, 1)];
        self.textLabel[i].text = text;

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


// 请求投屏。。。
- (void)connect:(NSNotification *)note{
    NSLog(@"%@",note.object);
//    [self.boradcastViewController ]
    NSLog(@"isBroadcasting:%d",self.broadcastController.isBroadcasting);
//    if(!self.broadcastController.isBroadcasting){
//        [RPBroadcastActivityViewController loadBroadcastActivityViewControllerWithPreferredExtension:@"com.fjrh.intelligentclass.intelligentclassSetupSetupUI" handler:^(RPBroadcastActivityViewController * _Nullable broadcastActivityViewController, NSError * _Nullable error) {
//            self.boradcastViewController = broadcastActivityViewController;
//            self.boradcastViewController.delegate = self;
//            [[RootViewController sharedRootViewController] presentViewController:self.boradcastViewController animated:YES completion:nil];
//        }];
//    }
}

- (void)stop:(NSNotification *)note{

    [self.broadcastController finishBroadcastWithHandler:^(NSError * _Nullable error) {
        NSLog(@"Finish:%@",error);
    }];
    
}


- (void)broadcastActivityViewController:(RPBroadcastActivityViewController *)broadcastActivityViewController didFinishWithBroadcastController:(nullable RPBroadcastController *)broadcastController error:(nullable NSError *)error {
    [broadcastController.serviceInfo setValue:@"abc" forKey:@"ip"];
    dispatch_async(dispatch_get_main_queue(), ^{
        [broadcastActivityViewController dismissViewControllerAnimated:YES completion:nil];
    });
    
    if (error) {
        NSLog(@"BAC: %@ didFinishWBC: %@, err: %@",
              broadcastActivityViewController,
              broadcastController,
              error);
    }
    self.broadcastController = broadcastController;
    [broadcastController startBroadcastWithHandler:^(NSError * _Nullable error) {
        if (!error) {
            NSLog(@"");
        }
        else {
            NSLog(@"startBroadcast %@",error.localizedDescription);
        }
    }];
}

@end
