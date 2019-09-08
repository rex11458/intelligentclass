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
@interface DrawingViewController ()
@property (strong, nonatomic) IBOutlet UIView *toolsView;
@property (strong, nonatomic) IBOutlet UIButton *clearButton;
@property (strong, nonatomic) IBOutlet UIButton *undoButton;
@property (strong, nonatomic) IBOutlet NSLayoutConstraint *add_button_height;
@property (strong, nonatomic) IBOutlet UIButton *addButton;
@property (strong, nonatomic) IBOutlet UIButton *sketchPadButton;

@property (strong, nonatomic) IBOutlet UIImageView *bgImageView;
@property (strong, nonatomic) IBOutlet ACEDrawingView *drawingView;
@property (strong, nonatomic) IBOutlet ACEDrawingView *pureDrawingView;

@property (strong, nonatomic) NSMutableArray<UIImage *> * drawingImageArray;

@end

@implementation DrawingViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    self.drawingView.lineWidth = 5;
    self.pureDrawingView.lineWidth = 5;

    self.bgImageView.image = _backgroundImage;
    self.addButton.hidden = YES;
    self.add_button_height.constant = 0;
    self.pureDrawingView.backgroundColor= [UIColor colorWithRed:1 green:236/255.0 blue:182/255.0 alpha:1];
    self.drawingImageArray = [NSMutableArray array];
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
    
    
}

- (void)sketchpad{
    self.sketchPadButton.selected = !self.sketchPadButton.isSelected;
    _addButton.hidden = !self.sketchPadButton.isSelected;
    _add_button_height.constant = self.sketchPadButton.isSelected ? 50 : 0;
    
    self.pureDrawingView.hidden = !self.sketchPadButton.isSelected;
}

- (void)pan{

}

- (void)undo{
    [self.drawingView undoLatestStep];
    [self updateButtonStatus];
}

- (void)clear{
    [self.drawingView clear];
    [self updateButtonStatus];

}

- (void)send{
    [self dismiss];
    [self clear];
    [self.rootViewController updateImage:[self takeSnapshot]];
}

- (void)dismiss {
    [self dismissViewControllerAnimated:NO completion:nil];
}

- (void)switching{
    
    _toolsView.hidden = !_toolsView.isHidden;
}

- (void)updateButtonStatus{
    self.undoButton.enabled = [self.drawingView canUndo];
}


- (UIImage *)takeSnapshot
{
    // 判断是否为retina屏, 即retina屏绘图时有放大因子
    if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)]){
        
        UIGraphicsBeginImageContextWithOptions(self.view.window.bounds.size, NO, [UIScreen mainScreen].scale);
        
    } else {
        
        UIGraphicsBeginImageContext(self.view.window.bounds.size);
        
    }
    
    [self.view.window.layer renderInContext:UIGraphicsGetCurrentContext()];
    
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    
    UIGraphicsEndImageContext();

    return image;
}

#pragma mark - 禁用旋转
- (BOOL)shouldAutorotate{
    
    return NO;
    
}
@end



