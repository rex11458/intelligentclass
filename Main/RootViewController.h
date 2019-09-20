//
//  RootViewController.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "MediaPlayerViewController.h"
#import "DrawingViewController.h"
#import <WebKit/WebKit.h>
NS_ASSUME_NONNULL_BEGIN

@interface RootViewController : UIViewController<WKScriptMessageHandler>

@property (nonatomic, strong) MediaPlayerViewController *playerViewController;
@property (nonatomic, strong) DrawingViewController *drawingViewController;

@property (nonatomic, assign) BOOL isPlaying;

+ (RootViewController *)sharedRootViewController;

- (void)updateImage:(UIImage *)image;

- (void)openCanvas;

- (void)rotation:(UIInterfaceOrientation)orientation;

@end

NS_ASSUME_NONNULL_END
