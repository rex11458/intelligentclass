//
//  H264Encoder.h
//  intelligentclassSetup
//
//  Created by LiuRex on 2019/10/12.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <ReplayKit/ReplayKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol H264EncoderDelegate;

@interface H264Encoder : NSObject

- (instancetype)initWithWidth:(float)width height:(float)height;

- (void)encodeBuffer:(CMSampleBufferRef)sampleBuffer;

- (void)stopEncode;

@property (nonatomic, assign) id<H264EncoderDelegate> delegate;

@end


@protocol  H264EncoderDelegate <NSObject>

//返回封包后的数据
- (void)h264encoder:(H264Encoder *)encoder processedData:(NSData *)data;

@end

NS_ASSUME_NONNULL_END
