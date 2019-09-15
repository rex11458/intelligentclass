//
//  ScreeningViewController.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/15.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "ScreeningViewController.h"

@interface ScreeningViewController ()<UITextFieldDelegate>
{
    NSString *_code;
}
@property (strong, nonatomic) IBOutlet UIView *saomaView;
@property (strong, nonatomic) IBOutlet UIView *toupingmaView;
@property (strong, nonatomic) IBOutlet UIButton *saoyisaoButton;
@property (strong, nonatomic) IBOutlet UIButton *toupingmaButton;
@property (strong, nonatomic) IBOutlet UIButton *startToupingAction;
@property (strong, nonatomic) IBOutletCollection(UILabel) NSArray<UILabel *> *textLabel;
@property (strong, nonatomic) IBOutlet UITextField *textField;

@end

@implementation ScreeningViewController

- (void)dealloc{
    [[NSNotificationCenter defaultCenter] removeObserver:self name:UITextFieldTextDidChangeNotification object:nil];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    [[NSNotificationCenter defaultCenter] addObserverForName:UITextFieldTextDidChangeNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
        [self changeText];
    }];
}


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

- (IBAction)openScanning:(id)sender {
    
}

- (IBAction)startTouping:(id)sender {
    
}

- (IBAction)saoyisaoAction:(UIButton *)sender {
    _saoyisaoButton.selected = YES;
    _toupingmaButton.selected = NO;
    
    _saomaView.hidden = NO;
    _toupingmaView.hidden = YES;
}

- (IBAction)toupingmaAction:(UIButton *)sender {
    _saoyisaoButton.selected = NO;
    _toupingmaButton.selected = YES;
    
    _saomaView.hidden = YES;
    _toupingmaView.hidden = NO;
}

- (IBAction)back:(id)sender {
    [self dismissViewControllerAnimated:NO completion:nil];
}

- (void)changeText{
    self.startToupingAction.enabled = [self.textField.text length] == 4;
    [self.textLabel enumerateObjectsUsingBlock:^(UILabel * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        obj.text = @"";
    }];
    for(int i =0; i < [self.textField.text length]; i++){
        
        NSString *text = [self.textField.text substringWithRange:NSMakeRange(i, 1)];
        self.textLabel[i].text = text;

    }
}

#pragma mark - UITextFieldDelegate
- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string{

    if(textField.text.length == 4){
    
        if (![string isEqualToString:@""]) {
            
            
            return NO;
        }
    
    }
    
    return YES;
}

@end
