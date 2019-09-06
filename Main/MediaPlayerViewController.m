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
@property (nonatomic) id<IJKMediaPlayback> ijkPlayer;

@property (nonatomic, strong) UIView *playView;

@end

@implementation MediaPlayerViewController

- (void)viewDidLoad {
    [super viewDidLoad];

}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    //

    [self __configSubViews];
    
    [self __initPlayer];
    
    [self __addPlayerView];
    [self play];
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

-(void)__addPlayerView{
    UIView *playingView = [self.ijkPlayer view];
    playingView.frame = self.playView.bounds;
//    playingView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    [self.playView insertSubview:playingView atIndex:0];
}

- (void)__initPlayer{
    
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
    
    self.ijkPlayer = [[IJKFFMoviePlayerController alloc] initWithContentURL:self.url withOptions:options];
    
    [self.ijkPlayer setScalingMode:IJKMPMovieScalingModeFill];
    [self installMovieNotificationObservers];
}


- (void)play{
    if(![self.ijkPlayer isPlaying]){
        [self.ijkPlayer prepareToPlay];
        [_indicatorView startAnimating];
    }
}

//支持设备自动旋转

- (BOOL)shouldAutorotate{
    
    return YES;
    
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations{
    
    return UIInterfaceOrientationMaskLandscape;
    
}

//network load state changes
- (void)loadStateDidChange:(NSNotification *)notification{
    IJKMPMovieLoadState loadState = self.ijkPlayer.loadState;
    NSLog(@"LoadStateDidChange : %d",(int)loadState);
}

//when movie playback ends or a user exits playback.
- (void)moviePlayBackFinish:(NSNotification *)notification{
    int reason = [[[notification userInfo] valueForKey:IJKMPMoviePlayerPlaybackDidFinishReasonUserInfoKey] intValue];
    NSLog(@"playBackFinish : %d",reason);
}

//
- (void)mediaIsPreparedToPlayDidChange:(NSNotification *)notification{
    NSLog(@"mediaIsPrepareToPlayDidChange");
}

// when the playback state changes, either programatically or by the user
- (void)moviePlayBackStateDidChange:(NSNotification *)notification{
    switch (_ijkPlayer.playbackState) {
        case IJKMPMoviePlaybackStateStopped:
            NSLog(@"playBackState %d: stoped", (int)self.ijkPlayer.playbackState);
            break;
        case IJKMPMoviePlaybackStatePlaying:
            NSLog(@"playBackState %d: playing", (int)self.ijkPlayer.playbackState);
            _backButton.hidden = YES;
              [_indicatorView stopAnimating];
            break;
        case IJKMPMoviePlaybackStatePaused:
            NSLog(@"playBackState %d: paused", (int)self.ijkPlayer.playbackState);
            break;
        case IJKMPMoviePlaybackStateInterrupted:
            NSLog(@"playBackState %d: interrupted", (int)self.ijkPlayer.playbackState);
            break;
        case IJKMPMoviePlaybackStateSeekingForward:
            break;
        case IJKMPMoviePlaybackStateSeekingBackward:
            break;
        default:
            break;
    }
}


- (void)installMovieNotificationObservers{
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(loadStateDidChange:)
                                                 name:IJKMPMoviePlayerLoadStateDidChangeNotification
                                               object:self.ijkPlayer];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(moviePlayBackFinish:)
                                                 name:IJKMPMoviePlayerPlaybackDidFinishNotification
                                               object:self.ijkPlayer];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(mediaIsPreparedToPlayDidChange:)
                                                 name:IJKMPMediaPlaybackIsPreparedToPlayDidChangeNotification
                                               object:self.ijkPlayer];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(moviePlayBackStateDidChange:)
                                                 name:IJKMPMoviePlayerPlaybackStateDidChangeNotification
                                               object:self.ijkPlayer];
}

- (void)removeMovieNotificationObservers{
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMoviePlayerLoadStateDidChangeNotification
                                                  object:self.ijkPlayer];
    
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMoviePlayerPlaybackDidFinishNotification
                                                  object:self.ijkPlayer];
    
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMediaPlaybackIsPreparedToPlayDidChangeNotification
                                                  object:self.ijkPlayer];
    
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMoviePlayerPlaybackStateDidChangeNotification
                                                  object:self.ijkPlayer];
}


- (void)dismiss{
    [self dismissViewControllerAnimated:NO completion:^{
        if([self.ijkPlayer isPlaying]){
            [self.ijkPlayer stop];
        }
        [self.ijkPlayer.view removeFromSuperview];
        self.ijkPlayer = nil;
    }];
}

- (void)dealloc{
    
}
- (void)tapAction{
    _backButton.hidden = !_backButton.isHidden;
}
@end
