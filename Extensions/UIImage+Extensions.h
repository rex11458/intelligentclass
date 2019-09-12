//
//  UIImage+Extensions.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/12.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIImage (Extensions)
- (NSData *)compressQualityWithMaxLength:(NSInteger)maxLength ;
@end

NS_ASSUME_NONNULL_END
