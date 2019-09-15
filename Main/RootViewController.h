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

NS_ASSUME_NONNULL_BEGIN

@interface RootViewController : UIViewController

@property (nonatomic, strong) MediaPlayerViewController *playerViewController;
@property (nonatomic, strong) DrawingViewController *drawingViewController;


+ (RootViewController *)sharedRootViewController;

- (void)updateImage:(UIImage *)image;

- (void)openCanvas;


@end

NS_ASSUME_NONNULL_END
