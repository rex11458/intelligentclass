//
//  MediaPlayerViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "VLCMediaPlayerViewController.h"
#import <MobileVLCKit/MobileVLCKit.h>
#import "WMDragView.h"
#import "RootViewController.h"
@interface VLCMediaPlayerViewController ()<VLCMediaPlayerDelegate>
{
    WMDragView *_dragView;
    DrawingViewController * _drawingViewController;
}

@property (nonatomic , strong) VLCMediaPlayer *player;
@property (strong, nonatomic) IBOutlet UIButton *backButton;

@property (strong, nonatomic) IBOutlet UIActivityIndicatorView *indicatorView;

@property (strong, nonatomic) IBOutlet UIView *playView;

@end

@implementation VLCMediaPlayerViewController


-(VLCMediaPlayer *)player
{
    if (!_player) {
        _player = [[VLCMediaPlayer alloc] initWithOptions:nil];
        _player.delegate = self;
    }
    return _player;
}



- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor blackColor];
    _drawingViewController = [DrawingViewController new];
    
}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    
    if(!_dragView){
        UIColor *mainColor = [UIColor colorWithRed:0 green:203/255.0 blue:171/255.0 alpha:1];
        UIEdgeInsets insets = self.view.window.safeAreaInsets;
        
        _dragView = [[WMDragView alloc]initWithFrame:CGRectMake((CGRectGetWidth(self.view.bounds) - 40) * 0.5,CGRectGetHeight(self.view.bounds)-40-insets.bottom , 40, 40)];
        _dragView.freeRect = CGRectMake(0, insets.top, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds)-insets.top-insets.bottom);
        _dragView.backgroundColor = mainColor;
        _dragView.layer.cornerRadius = 20;
        _dragView.imageView.image = [UIImage imageNamed:@"icon_pencil"];
        _dragView.imageView.contentMode = UIViewContentModeCenter;
        __weak typeof(self) weakSelf = self;
        _dragView.clickDragViewBlock = ^(WMDragView *dragView) {
            [weakSelf openCanvas];
        };
        
        [self.view addSubview:_dragView];
    }
}


- (void)shutdown{
    
    if(self.player.isPlaying){
        [self.player stop];
    }
}

- (void)play{
    [self shutdown];
    self.player.drawable = self.playView;
    self.player.media = [VLCMedia mediaWithURL:[NSURL URLWithString:self.url]];

    NSLog(@"\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ RTSP播放地址:%@\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n",self.url);
    
    if(_player){
        [_indicatorView startAnimating];
        [self.player play];
    }
}

#pragma mark - VLCMediaPlayerDelegate
- (void)mediaPlayerStateChanged:(NSNotification *)aNotification{

    switch (self.player.state) {
        case VLCMediaPlayerStatePlaying:
            NSLog(@"正在播放");
            _backButton.hidden = YES;
            [_indicatorView stopAnimating];
            break;
        default:
            break;
    }
}


#pragma mark - 打开画布
- (void)openCanvas {
    
    _drawingViewController.backgroundImage = [self snapshotCurrentFullScreen];
    [self addChildViewController:_drawingViewController];
    _drawingViewController.view.frame = [UIScreen mainScreen].bounds;
    [self.view addSubview:_drawingViewController.view];
    
}


- (BOOL)isPlaying{
    return [_player isPlaying];
}

- (UIImage *)snapshotCurrentFullScreen{
    _dragView.hidden = YES;
    // 判断是否为retina屏, 即retina屏绘图时有放大因子
    if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)]){
        
        UIGraphicsBeginImageContextWithOptions(self.view.window.bounds.size, NO, [UIScreen mainScreen].scale);
        
    } else {
        
        UIGraphicsBeginImageContext(self.view.window.bounds.size);
        
    }
    
    [self.view.window.layer renderInContext:UIGraphicsGetCurrentContext()];
    
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    
    UIGraphicsEndImageContext();
    _dragView.hidden = NO;
    return image;
}



- (IBAction)tapAction:(id)sender {
    _backButton.hidden = !_backButton.isHidden;
}


- (IBAction)back:(id)sender {
    
    [self dismiss];

}

- (void)close{
    [self dismiss];
}


- (void)dismiss{
    [self shutdown];
    
    [self.view removeFromSuperview];
    [self removeFromParentViewController];
    
    [[RootViewController sharedRootViewController] rotation:UIInterfaceOrientationPortrait];
}


@end
