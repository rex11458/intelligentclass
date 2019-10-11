//
//  ScreeningViewController.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/15.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface ScreeningViewController : UIViewController

@property (nonatomic, strong) NSDictionary *groupInfo;
@property (nonatomic, copy) NSString *userName;
@property (nonatomic, assign) BOOL isScreening;

- (void)sendStopScreening;

@end

NS_ASSUME_NONNULL_END
