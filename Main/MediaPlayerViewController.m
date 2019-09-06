//
//  MediaPlayerViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/6.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "MediaPlayerViewController.h"
#import <IJKMediaFramework/IJKMediaFramework.h>
@interface MediaPlayerViewController ()
{
    UIActivityIndicatorView *_indicatorView;
    UIButton *_backButton;
}

@property (nonatomic , strong) IJKFFMoviePlayerController *player;

@property (nonatomic, strong) UIView *playView;

@end

@implementation MediaPlayerViewController


-(IJKFFMoviePlayerController *)player
{
    if (!_player) {
        //  设置不报告日志
        [IJKFFMoviePlayerController setLogReport:NO];
        //  设置日志级别为信息
        [IJKFFMoviePlayerController setLogLevel:k_IJK_LOG_INFO];
        
        // 2. 检查版本是否匹配
        [IJKFFMoviePlayerController checkIfFFmpegVersionMatch:YES];
        // 3.  创建IJKFFMoviePlayerController
        // 3.1 默认选项配置
        IJKFFOptions *options = [IJKFFOptions optionsByDefault];
        
        [options setPlayerOptionIntValue:30  forKey:@"max-fps"];
        [options setPlayerOptionIntValue:30 forKey:@"r"];
        //跳帧开关
        [options setPlayerOptionIntValue:1  forKey:@"framedrop"];
        [options setPlayerOptionIntValue:0  forKey:@"start-on-prepared"];
        [options setPlayerOptionIntValue:0  forKey:@"http-detect-range-support"];
        [options setPlayerOptionIntValue:48  forKey:@"skip_loop_filter"];
        [options setPlayerOptionIntValue:0  forKey:@"packet-buffering"];
        [options setPlayerOptionIntValue:2000000 forKey:@"analyzeduration"];
        [options setPlayerOptionIntValue:25  forKey:@"min-frames"];
        [options setPlayerOptionIntValue:1  forKey:@"start-on-prepared"];
        [options setCodecOptionIntValue:8 forKey:@"skip_frame"];
        [options setFormatOptionValue:@"nobuffer" forKey:@"fflags"];
        [options setFormatOptionValue:@"8192" forKey:@"probsize"];
        //自动转屏开关
        [options setFormatOptionIntValue:0 forKey:@"auto_convert"];
        //重连次数
        [options setFormatOptionIntValue:1 forKey:@"reconnect"];
        //开启硬解码
        [options setPlayerOptionIntValue:1  forKey:@"videotoolbox"];

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

}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    //

    [self __configSubViews];
//
    dispatch_async(dispatch_get_main_queue(), ^{
        [self play];
    });
}

- (void)__configSubViews{
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


- (void)play{
    
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


//支持设备自动旋转

- (BOOL)shouldAutorotate{
    
    return YES;
    
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations{
    
    return UIInterfaceOrientationMaskLandscape;
    
}


- (void)dismiss{
    [self dismissViewControllerAnimated:NO completion:^{
        if([self.player isPlaying]){
            [self.player stop];
        }
        [self.player.view removeFromSuperview];
        self.player = nil;
    }];
}


- (void)tapAction{
    _backButton.hidden = !_backButton.isHidden;
}



@end
