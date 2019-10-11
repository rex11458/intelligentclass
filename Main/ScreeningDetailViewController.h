//
//  ScreeningDetailViewController.h
//  intelligentclass
//
//  Created by LiuRex on 2019/10/10.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN
@class ScreeningViewController;
@interface ScreeningDetailViewController : UIViewController

@property (nonatomic, copy) NSString *userName;

@property (nonatomic, assign) ScreeningViewController *screeningViewController;

- (void)resetTimer;

@end

NS_ASSUME_NONNULL_END
