//
//  DrawingViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/8.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "DrawingViewController.h"
#import "ACEDrawingView.h"
#import "RootViewController.h"
#import "DrawingManagerView.h"
#import "DarwingManagerItemView.h"
@interface DrawingViewController ()<ACEDrawingViewDelegate,DrawingManagerViewDelegate>
@property (strong, nonatomic) IBOutlet UIView *toolsView;
@property (strong, nonatomic) IBOutlet UIButton *clearButton;
@property (strong, nonatomic) IBOutlet UIButton *undoButton;
@property (strong, nonatomic) IBOutlet NSLayoutConstraint *add_button_height;
@property (strong, nonatomic) IBOutlet UIButton *addButton;
@property (strong, nonatomic) IBOutlet UIButton *sketchPadButton;

@property (strong, nonatomic) IBOutlet UIImageView *bgImageView;
@property (strong, nonatomic) IBOutlet ACEDrawingView *drawingView;
@property (strong, nonatomic) IBOutlet ACEDrawingView *pureDrawingView;

@property (strong, nonatomic) IBOutlet DrawingManagerView *drawingManagerView;
@property (strong, nonatomic) NSMutableArray<ACEDrawingView *> * drawingViews;
@property (strong, nonatomic) IBOutlet UIButton *extendButton;

@end

@implementation DrawingViewController

- (ACEDrawingView *)currentDrawingView{
    if(self.sketchPadButton.selected){
        return self.pureDrawingView;
    }
    
    return self.drawingView;
}

- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    [self updateButtonStatus];
}
- (void)viewDidLoad {
    [super viewDidLoad];
    self.drawingView.lineWidth = 5;
    self.drawingView.delegate = self;
    self.pureDrawingView.lineWidth = 5;
    self.pureDrawingView.delegate = self;

    self.bgImageView.image = _backgroundImage;
    self.addButton.hidden = YES;
    self.add_button_height.constant = 0;
    self.pureDrawingView.backgroundColor = [UIColor colorWithRed:1 green:236/255.0 blue:182/255.0 alpha:1];
    
    self.toolsView.layer.cornerRadius = 3;
    self.toolsView.layer.masksToBounds = YES;
    
    self.extendButton.layer.cornerRadius = 3;
    self.extendButton.layer.masksToBounds = YES;
    
    self.drawingManagerView.delegate = self;
    self.drawingManagerView.backgroundColor = [UIColor colorWithRed:1 green:236/255.0 blue:182/255.0 alpha:1];
    self.drawingViews = [NSMutableArray array];
    [self.drawingViews addObject:self.pureDrawingView];
}

- (void)setBackgroundImage:(UIImage *)backgroundImage{
    _backgroundImage = backgroundImage;
    self.bgImageView.image = _backgroundImage;
}


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/
- (IBAction)buttonAction:(UIButton *)sender {
    
    switch (sender.tag) {
        case 0:
            [self switching];
            break;
        case 1:
            [self dismiss];
            break;
        case 2:
            [self send];
            break;
        case 3:
            [self clear];
            break;
        case 4:
            [self undo];
            break;
        case 5:
            [self pan];
            break;
        case 6:
            [self sketchpad];
            break;
        case 7:
            [self add];
            break;

        default:
            break;
    }

}


- (void)add{
    
    self.addButton.selected = !self.addButton.isSelected;
    self.drawingManagerView.hidden = !(self.addButton.isSelected && self.sketchPadButton.isSelected);
    if(self.addButton.isSelected){
        self.drawingManagerView.drawingViews = self.drawingViews;
    }
}

- (void)sketchpad{
    self.sketchPadButton.selected = !self.sketchPadButton.isSelected;
    _addButton.hidden = !self.sketchPadButton.isSelected;
    _add_button_height.constant = self.sketchPadButton.isSelected ? 50 : 0;
    
    self.pureDrawingView.hidden = !self.sketchPadButton.isSelected;
    self.drawingManagerView.hidden = !(self.addButton.isSelected && self.sketchPadButton.isSelected);

    [ self updateButtonStatus];
}

- (void)pan{

}

- (void)undo{
    [self.currentDrawingView undoLatestStep];
    [self updateButtonStatus];
}

- (void)clear{
    [self.currentDrawingView clear];
    [self updateButtonStatus];
}

- (void)send{
    [[RootViewController sharedRootViewController] updateImage:[self takeSnapshot]];
    [self dismiss];
}

- (void)dismiss {
    
    [self.view removeFromSuperview];
    [self removeFromParentViewController];
    
    [self dismissViewControllerAnimated:NO completion:nil];
}

- (void)switching{
    
    _toolsView.hidden = !_toolsView.isHidden;
    _extendButton.selected  = !_extendButton.isSelected;
}

- (void)updateButtonStatus{
    self.undoButton.enabled = [self.currentDrawingView canUndo];
//    self.clearButton.enabled = [self.currentDrawingView canRedo];
}

- (void)changeViewStatus{
    self.drawingManagerView.hidden = !(self.addButton.isSelected && self.sketchPadButton.isSelected);
}

- (UIImage *)takeSnapshot
{
    self.toolsView.hidden = YES;
    self.extendButton.hidden = YES;
    // 判断是否为retina屏, 即retina屏绘图时有放大因子
    if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)]){
        
        UIGraphicsBeginImageContextWithOptions(self.view.window.bounds.size, NO, [UIScreen mainScreen].scale);
        
    } else {
        
        UIGraphicsBeginImageContext(self.view.window.bounds.size);
        
    }
    
    [self.view.window.layer renderInContext:UIGraphicsGetCurrentContext()];
    
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    
    UIGraphicsEndImageContext();

    self.toolsView.hidden = NO;
    self.extendButton.hidden = NO;
    return image;
}

#pragma mark - DrawingManagerViewDelegate
- (void)drawingManagerView:(DrawingManagerView *)view del:(NSInteger)index{
    ACEDrawingView *v = [self.drawingViews objectAtIndex:index];
    [v removeFromSuperview];
    [self.drawingViews removeObjectAtIndex:index];
    self.drawingManagerView.drawingViews = self.drawingViews;
}

- (void)drawingManagerViewAdd:(DrawingManagerView *)view{
    if(self.drawingViews.count >= 10){
        return;
    }
    ACEDrawingView *v = [[ACEDrawingView alloc] initWithFrame:self.view.bounds];
    v.backgroundColor = [UIColor colorWithRed:1 green:236/255.0 blue:182/255.0 alpha:1];
    v.lineWidth = 5;
    v.delegate = self;
    [self.drawingViews addObject:v];
    
    [self changeDrawingViewStatusWithIndex:(self.drawingViews.count-1)];
    
}

- (void)drawingMangerView:(DrawingManagerView *)view selectedIndex:(NSInteger)index{
    
    [self changeDrawingViewStatusWithIndex:index];

}

- (void)changeDrawingViewStatusWithIndex:(NSInteger)index {
    
    for (UIView *v in self.drawingViews) {
        [self.view insertSubview:v belowSubview:self.bgImageView];
    }
    
    ACEDrawingView *v = [self.drawingViews objectAtIndex:index];
    [self.view insertSubview:v belowSubview:self.drawingManagerView];
    self.pureDrawingView = v;
    self.addButton.selected = NO;
    [self updateButtonStatus];
    [self changeViewStatus];

}


#pragma mark - ACEDrawingViewDelegate
- (void)drawingView:(ACEDrawingView *)view didEndDrawUsingTool:(id<ACEDrawingTool>)tool{
    [self updateButtonStatus];
}

#pragma mark - 禁用旋转
- (BOOL)shouldAutorotate{
    
    return NO;
    
}
@end



