//
//  MediaPlayerViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "MediaPlayerViewController.h"
#import <IJKMediaFramework/IJKMediaFramework.h>
#import "WMDragView.h"
#import "RootViewController.h"
@interface MediaPlayerViewController ()
{
    UIActivityIndicatorView *_indicatorView;
    UIButton *_backButton;
    WMDragView *_dragView;
    DrawingViewController * _drawingViewController;
}

@property (nonatomic , strong) IJKFFMoviePlayerController *player;

@property (nonatomic, strong) UIView *playView;

@end

@implementation MediaPlayerViewController


-(IJKFFMoviePlayerController *)player
{
    if (!_player) {
        //  设置不报告日志
        [IJKFFMoviePlayerController setLogReport:YES];
        //  设置日志级别为信息
        [IJKFFMoviePlayerController setLogLevel:k_IJK_LOG_DEBUG];
//
//        // 2. 检查版本是否匹配
//        [IJKFFMoviePlayerController checkIfFFmpegVersionMatch:YES];
        // 3.  创建IJKFFMoviePlayerController
        // 3.1 默认选项配置
        IJKFFOptions *options = [IJKFFOptions optionsByDefault];
        
        [options setPlayerOptionIntValue:30 forKey:@"max-fps"];
        [options setPlayerOptionIntValue:1 forKey:@"framedrop"];
        [options setPlayerOptionIntValue:0 forKey:@"start-on-prepared"];
        [options setPlayerOptionIntValue:0 forKey:@"http-detect-range-support"];
        [options setPlayerOptionIntValue:0 forKey:@"packet-buffering"];
        [options setPlayerOptionIntValue:2000000 forKey:@"analyzeduration"];
        [options setPlayerOptionIntValue:25 forKey:@"min-frames"];
        [options setPlayerOptionIntValue:1 forKey:@"start-on-prepared"];
        //解码参数，画面更清晰
        [options setCodecOptionIntValue:IJK_AVDISCARD_DEFAULT forKey:@"skip_loop_filter"];
        //
        [options setCodecOptionIntValue:IJK_AVDISCARD_DEFAULT forKey:@"skip_frame"];
        [options setFormatOptionValue:@"tcp" forKey:@"rtsp_transport"];
        [options setFormatOptionValue:@"nobuffer" forKey:@"fflags"];
        // [options setFormatOptionValue:@"8192" forKey:@"probsize"];
        [options setFormatOptionIntValue:8192 forKey:@"probesize"];
        [options setFormatOptionIntValue:2 forKey:@"auto_convert"];
        [options setFormatOptionIntValue:1 forKey:@"reconnect"];
        [options setPlayerOptionIntValue:1  forKey:@"videotoolbox"];
        //帧速率(fps) （可以改，确认非标准桢率会导致音画不同步，所以只能设定为15或者29.97）
        [options setPlayerOptionIntValue:29.97 forKey:@"r"];
        // -vol——设置音量大小，256为标准音量。（要设置成两倍音量时则输入512，依此类推
        [options setPlayerOptionIntValue:512 forKey:@"vol"];
        _player = [[IJKFFMoviePlayerController alloc] initWithContentURLString:self.url withOptions: options];
        //4. 屏幕适配
        // 4.1 设置播放视频视图的frame与控制器的View的bounds一致
        _player.view.frame  = self.playView.bounds;

        // 4.2 设置适配横竖屏(设置四边固定,长宽灵活)
        //        _player.view.autoresizingMask = UIViewAutoresizingFlexibleWidth|UIViewAutoresizingFlexibleHeight;
        //  4.3 设置播放视图的缩放模式
        _player.scalingMode = IJKMPMovieScalingModeAspectFit;
        //  4.4 设置自动播放
        _player.shouldAutoplay = YES;
        //  4.5 自动更新子视图的大小
        //        _player.view.autoresizesSubviews = YES;
        //  4.6 添加播放视图到控制器的View
        //        [self.view addSubview:self.player.view];
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(moviePlayBackStateDidChange:) name:IJKMPMoviePlayerPlaybackStateDidChangeNotification object:_player];
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
    //

    [self __configSubViews];
//
    UIColor *mainColor = [UIColor colorWithRed:0 green:203/255.0 blue:171/255.0 alpha:1];

    if(!_dragView){
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
    
    
    dispatch_async(dispatch_get_main_queue(), ^{
        [self play];
    });
}



- (void)__configSubViews{
    if(!self.playView){
        //    //播放区域
        UIEdgeInsets insets = self.view.window.safeAreaInsets;

        self.playView = [[UIView alloc] initWithFrame:CGRectMake(insets.left, insets.top, CGRectGetWidth(self.view.bounds) - insets.left-insets.right, CGRectGetHeight(self.view.bounds) - insets.top)];
        self.playView.backgroundColor = [UIColor blackColor];
        self.playView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
        [self.view addSubview:self.playView];
        
        
        UIButton *backButton = [UIButton buttonWithType:UIButtonTypeSystem];
        [backButton setImage:[UIImage imageNamed:@"nav_back"] forState:UIControlStateNormal];
        [self.playView addSubview:backButton];
        [backButton addTarget:self action:@selector(dismiss) forControlEvents:UIControlEventTouchUpInside];
        backButton.tintColor = [UIColor whiteColor];
        backButton.frame = CGRectMake(0, 0, 40, 40);
        _backButton = backButton;
        
        UIActivityIndicatorView *indicatorView = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
        indicatorView.center = CGPointMake(CGRectGetWidth(self.playView.bounds) * 0.5, CGRectGetHeight(self.playView.bounds) * 0.5);
        [indicatorView hidesWhenStopped];
        [self.playView addSubview:indicatorView];
        _indicatorView = indicatorView;
        
        UITapGestureRecognizer *ges = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tapAction)];
        [self.playView addGestureRecognizer:ges];
    }
}


- (void)shutdown{
    if([_player isPlaying]){
        [self.player stop];
        [self.player shutdown];
        [self.player didShutdown];
    }
    [self.player.view removeFromSuperview];
    _player = nil;
    
}

- (void)play{
    [self shutdown];
    NSLog(@"\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n RTSP播放地址:%@\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n",self.url);
    self.player.view.frame = self.playView.bounds;
    [self.playView insertSubview:self.player.view atIndex:0];
    
    if(_player){
        [_indicatorView startAnimating];
        [self.player prepareToPlay];
    }
}


// when the playback state changes, either programatically or by the user
- (void)moviePlayBackStateDidChange:(NSNotification *)notification{
 
    switch (self.player.playbackState) {
        case IJKMPMoviePlaybackStateStopped:
            NSLog(@"停止");
            break;
        case IJKMPMoviePlaybackStatePlaying:
            NSLog(@"正在播放");

            _backButton.hidden = YES;
            [_indicatorView stopAnimating];
            break;
        case IJKMPMoviePlaybackStatePaused:
            NSLog(@"暂停");
            break;
        case IJKMPMoviePlaybackStateInterrupted:
            NSLog(@"打断");
            break;
        case IJKMPMoviePlaybackStateSeekingForward:
            NSLog(@"快进");
            break;
        case IJKMPMoviePlaybackStateSeekingBackward:
            NSLog(@"快退");
            break;
        default:
            break;
    }
    
}


#pragma mark - 打开画布
- (void)openCanvas {
    
    _drawingViewController.backgroundImage = [self snapshotCurrentFullScreen];
    [self addChildViewController:_drawingViewController];
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


- (void)dismiss{
    [self shutdown];
    
    [self.view removeFromSuperview];
    [self removeFromParentViewController];

    [[RootViewController sharedRootViewController] rotation:UIInterfaceOrientationPortrait];
}

- (void)dealloc{
    NSLog(@"MediaPlayerViewController dealloc");
}

- (void)tapAction{
    _backButton.hidden = !_backButton.isHidden;
}

- (void)close{
    [self dismiss];
}

@end
