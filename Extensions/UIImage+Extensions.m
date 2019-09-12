//
//  UIImage+Extensions.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/12.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "UIImage+Extensions.h"

@implementation UIImage (Extensions)

- (NSData *)compressQualityWithMaxLength:(NSInteger)maxLength {
    CGFloat compression = 1;
    NSData *data = UIImageJPEGRepresentation(self, compression);
    while (data.length > maxLength && compression > 0) {
        compression -= 0.02;
        data = UIImageJPEGRepresentation(self, compression); // When compression less than a value, this code dose not work
    }
    return data;
}

@end
