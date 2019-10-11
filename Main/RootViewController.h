//
//  RootViewController.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "VLCMediaPlayerViewController.h"
#import "DrawingViewController.h"
#import "ScreeningViewController.h"
#import <WebKit/WebKit.h>
NS_ASSUME_NONNULL_BEGIN

@interface RootViewController : UIViewController<WKScriptMessageHandler>

@property (nonatomic, strong) VLCMediaPlayerViewController *playerViewController;
@property (nonatomic, strong) DrawingViewController *drawingViewController;
@property (nonatomic, strong) ScreeningViewController *screeningViewController;
@property (nonatomic,copy) NSString *currentUserName;

@property (nonatomic, assign) BOOL isPlaying;

+ (RootViewController *)sharedRootViewController;

- (void)updateImage:(UIImage *)image;

- (void)openCanvas;

- (void)getScreenIP:(NSString *)code;

- (void)rotation:(UIInterfaceOrientation)orientation;

- (void)connetHost:(NSString *)host;

- (void)sendSteam:(NSData *)data;

- (void)cutOff;

@end

NS_ASSUME_NONNULL_END
