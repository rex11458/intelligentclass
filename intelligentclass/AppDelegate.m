//
//  AppDelegate.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/5.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "AppDelegate.h"
#import <AVFoundation/AVFoundation.h>

@interface AppDelegate ()


@property (nonatomic) UIBackgroundTaskIdentifier taskIdentifier;

@property (nonatomic) NSTimer *taskTimer;

@property (nonatomic) NSURL *musicUrl;

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    NSString *path = [[NSBundle mainBundle] pathForResource:@"slience" ofType:@"mp3"];
    self.musicUrl = [NSURL URLWithString:path];
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    typeof(self) weakSelf = self;
    self.taskIdentifier = [[UIApplication sharedApplication] beginBackgroundTaskWithExpirationHandler:^{
        [[UIApplication sharedApplication] endBackgroundTask:weakSelf.taskIdentifier];
        weakSelf.taskIdentifier = UIBackgroundTaskInvalid;
    }];
    
    self.taskTimer = [NSTimer scheduledTimerWithTimeInterval:20.0f repeats:YES block:^(NSTimer * _Nonnull timer) {
        if ([[UIApplication sharedApplication] backgroundTimeRemaining] < 61.f) {
            //创建播放器
            AVAudioSession *session = [AVAudioSession sharedInstance];
            [session setActive:YES error:nil];
            [session setCategory:AVAudioSessionCategoryPlayback withOptions:AVAudioSessionCategoryOptionMixWithOthers error:nil];
            AVAudioPlayer *audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:weakSelf.musicUrl error:nil];
            [audioPlayer prepareToPlay];
            [audioPlayer play];
            [[UIApplication sharedApplication] beginBackgroundTaskWithExpirationHandler:nil];
        }
    }];

}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    
    [self.taskTimer invalidate];
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
