//
//  ScreeningDetailViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/10/10.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "ScreeningDetailViewController.h"
#import "ScreeningViewController.h"
#import "Utils.h"
@interface ScreeningDetailViewController ()
@property (strong, nonatomic) IBOutlet UILabel *nameLabel;
@property (strong, nonatomic) IBOutlet UILabel *ipLabel;
@property (strong, nonatomic) IBOutlet UILabel *timeLabel;

@property (strong, nonatomic) NSTimer *timer;
@property (assign, nonatomic) int interval;
@end

@implementation ScreeningDetailViewController

- (void)setUserName:(NSString *)userName{
    _userName = [userName copy];
    self.nameLabel.text = _userName;
}

- (IBAction)back:(id)sender {
    [self.view.superview removeFromSuperview];
    [self.parentViewController removeFromParentViewController];
}

- (IBAction)stopScreening:(id)sender {
    [_screeningViewController sendStopScreening];
}


- (void)startTimer{
    if(!self.timer){
        self.timer = [NSTimer scheduledTimerWithTimeInterval:1 target:self selector:@selector(startCount) userInfo:nil repeats:YES];
    }
    [self.timer setFireDate:[NSDate date]];
    [self.timer fire];

}

- (void)startCount{

    
    NSString *time = [self timeFormatted:self.interval];
    
    self.timeLabel.text = time;
    
    self.interval++;

}


- (NSString *)timeFormatted:(int)totalSeconds
{
    
    int seconds = totalSeconds % 60;
    int minutes = (totalSeconds / 60) % 60;
    int hours = totalSeconds / 3600;
    
    return [NSString stringWithFormat:@"%02d:%02d:%02d",hours, minutes, seconds];
}


- (void)pauseTimer{
    
    [self.timer setFireDate:[NSDate distantFuture]];

}

- (void)resetTimer{
    [self.timer invalidate];
    self.timer = nil;
    self.interval = 0;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    self.ipLabel.text = [Utils getIPAddress];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
