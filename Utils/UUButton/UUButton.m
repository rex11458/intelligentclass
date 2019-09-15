//
//  UUButton.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/13.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "UUButton.h"
#define KSImageScale 0.65

@implementation UUButton


- (void)awakeFromNib{
    [super awakeFromNib];
    self.imageView.contentMode = UIViewContentModeCenter;
    self.titleLabel.textAlignment = NSTextAlignmentCenter;
}

- (CGRect)imageRectForContentRect:(CGRect)contentRect
{
    CGFloat W = contentRect.size.width ;
    CGFloat H = contentRect.size.height *KSImageScale ;
    return CGRectMake(0, 0, W, H);
}

- (CGRect)titleRectForContentRect:(CGRect)contentRect
{
    CGFloat W = contentRect.size.width;
    CGFloat H = contentRect.size.height * (1 - KSImageScale);
    CGFloat y = contentRect.size.height - H ;
    
    return CGRectMake(0, y, W, H);
}


@end
