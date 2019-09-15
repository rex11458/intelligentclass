//
//  DrawingManagerView.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/8.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "DrawingManagerView.h"
#import "DarwingManagerItemView.h"
#import "ACEDrawingView.h"
#define screen_width (CGRectGetWidth([UIScreen mainScreen].bounds))
#define screen_height (CGRectGetHeight([UIScreen mainScreen].bounds))

#define ratio  (screen_height / screen_width)

#define kCount 4

#define item_width (screen_width / kCount)

#define item_height (item_width * ratio)

#define total_count 10

@interface DrawingManagerView()
{
    ACEDrawingView *_globalDrawingView;
    
    CGRect _originalFrame;
    
    NSInteger _currentIndex;
    
    NSInteger _currentCount;
}
@end

@implementation DrawingManagerView

- (instancetype)initWithFrame:(CGRect)frame{
    if(self = [super initWithFrame:frame]){
        [self __init];
    }
    
    return  self;
}

- (void)awakeFromNib{
    [super awakeFromNib];
    [self __init];
}

- (void)__init{
    
    _currentIndex = 0;
    
    _currentCount = 1;
  
    
    [self updateSubviews];
}


- (void)setDrawingViews:(NSMutableArray<ACEDrawingView *> *)drawingViews{
    _drawingViews = drawingViews;
    
    [self updateSubviews];
}


- (void)updateSubviews{
    
    for (UIView *v in self.subviews) {
        [v removeFromSuperview];
    }
    
    NSInteger length = self.drawingViews.count;

    for (int idx = 0; idx <= length; idx++) {

        DarwingManagerItemView *v = [[NSBundle mainBundle] loadNibNamed:@"DarwingManagerItemView" owner:self options:nil][0];
        v.frame = CGRectMake((idx % kCount) * item_width, (idx / 4) * item_height, item_width, item_height);
        v.tag = idx;
        v.managerView = self;
        if(idx != length){
            ACEDrawingView *view = self.drawingViews[idx];
            v.image = [self takeSnapshot:view];
        }
        if(length == 1){
            v.delButton.hidden = YES;
        }
        [self addSubview:v];
    }
    
}



- (UIImage *)takeSnapshot:(UIView *)view
{
    // 判断是否为retina屏, 即retina屏绘图时有放大因子
    if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)]){
        
        UIGraphicsBeginImageContextWithOptions(view.bounds.size, NO, [UIScreen mainScreen].scale);
        
    } else {
        
        UIGraphicsBeginImageContext(view.bounds.size);
        
    }
    
    [view.layer renderInContext:UIGraphicsGetCurrentContext()];
    
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    
    UIGraphicsEndImageContext();
    
    return image;
}

@end
