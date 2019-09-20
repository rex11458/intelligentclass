//
//  MediaPlayerViewController.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface MediaPlayerViewController : UIViewController

@property (nonatomic, strong) NSString *url;

@property(nonatomic, assign, readonly) BOOL isPlaying;

- (void)play;

- (void)close;

@end

NS_ASSUME_NONNULL_END
