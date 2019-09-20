//
//  RotateNavigationController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/20.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "RotateNavigationController.h"

@interface RotateNavigationController ()

@end

@implementation RotateNavigationController

- (instancetype)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil{
    if(self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil]){
        self.interfaceOrientation = UIInterfaceOrientationPortrait;
        self.interfaceOrientationMask = UIInterfaceOrientationMaskPortrait;
    }
    return  self;
}

- (void)awakeFromNib{
    [super awakeFromNib];
    self.interfaceOrientation = UIInterfaceOrientationPortrait;
    self.interfaceOrientationMask = UIInterfaceOrientationMaskPortrait;
}

//设置是否允许自动旋转
- (BOOL)shouldAutorotate {
    return YES;
}

//设置支持的屏幕旋转方向
- (UIInterfaceOrientationMask)supportedInterfaceOrientations {
    return self.interfaceOrientationMask ;
}

////设置presentation方式展示的屏幕方向
//- (UIInterfaceOrientation)preferredInterfaceOrientationForPresentation {
//    return self.interfaceOrientation ;
//}

@end
