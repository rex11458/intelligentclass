//
//  DarwingManagerItemView.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/13.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "DarwingManagerItemView.h"
#import "DrawingManagerView.h"
@interface DarwingManagerItemView ()

@property (strong, nonatomic) IBOutlet UIImageView *rightDown;
@property (strong, nonatomic) IBOutlet UILabel *indexLabel;

@property (strong, nonatomic) IBOutlet UIView *contentView;

@property (strong, nonatomic) IBOutlet UIButton *adButton;
@property (strong, nonatomic) IBOutlet UIImageView *imageView;


@end

@implementation DarwingManagerItemView

- (void)awakeFromNib{
    [super awakeFromNib];
    self.contentView.layer.borderColor = [UIColor grayColor].CGColor;
    self.adButton.imageView.contentMode = UIViewContentModeScaleAspectFit;
    self.backgroundColor = [UIColor colorWithRed:1 green:236/255.0 blue:182/255.0 alpha:1];

}

- (void)setImage:(UIImage *)image{
    _image = image;
    
    self.imageView.image = _image;
    
    _adButton.hidden = YES;
    _imageView.hidden = NO;
    _rightDown.hidden = NO;
    _indexLabel.hidden = NO;
    _delButton.hidden = NO;

}


- (void)setTag:(NSInteger)tag{
    [super setTag:tag];
    
    self.indexLabel.text = [@(tag + 1) stringValue];
}


- (IBAction)del:(UIButton *)sender {
    
    if([self.managerView.delegate respondsToSelector:@selector(drawingManagerView:del:)]){
        [self.managerView.delegate drawingManagerView:self.managerView del:self.tag];
    }
}

- (IBAction)add:(id)sender {
    if([self.managerView.delegate respondsToSelector:@selector(drawingManagerViewAdd:)]){
        [self.managerView.delegate drawingManagerViewAdd:self.managerView];
    }
}

- (IBAction)onSelected:(id)sender {
    if([self.managerView.delegate respondsToSelector:@selector(drawingMangerView:selectedIndex:)]){
        [self.managerView.delegate drawingMangerView:self.managerView selectedIndex:self.tag];
    }
}


@end
