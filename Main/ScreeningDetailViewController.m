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

- (void)resetTimer{

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
