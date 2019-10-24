//
//  VLCMediaPlayerViewController.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/21.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "WMDragView.h"

NS_ASSUME_NONNULL_BEGIN

@interface VLCMediaPlayerViewController : UIViewController


@property (nonatomic, strong) NSString *url;

@property(nonatomic, assign, readonly) BOOL isPlaying;

@property (nonatomic, strong) WMDragView *dragView;

- (void)play;

- (void)shutdown;

- (void)close;

@end

NS_ASSUME_NONNULL_END
