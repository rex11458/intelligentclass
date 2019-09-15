//
//  DarwingManagerItemView.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/13.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ACEDrawingView.h"
@class DrawingManagerView;
NS_ASSUME_NONNULL_BEGIN

@interface DarwingManagerItemView : UIView

@property (strong, nonatomic) IBOutlet UIButton *delButton;

@property (nonatomic, assign) DrawingManagerView *managerView;

@property (nonatomic, strong) UIImage *image;
@end

NS_ASSUME_NONNULL_END
