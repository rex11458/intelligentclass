//
//  DrawingManagerView.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/8.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <UIKit/UIKit.h>
@class ACEDrawingView;
@class DarwingManagerItemView;
NS_ASSUME_NONNULL_BEGIN

@protocol DrawingManagerViewDelegate;

@interface DrawingManagerView : UIView

@property (nonatomic, strong) NSMutableArray<ACEDrawingView *> *drawingViews;

@property (nonatomic, assign) id<DrawingManagerViewDelegate> delegate;

@end


@protocol DrawingManagerViewDelegate <NSObject>

@optional
- (void)drawingMangerView:(DrawingManagerView *)view selectedIndex:(NSInteger)index;

- (void)drawingManagerView:(DrawingManagerView *)view del:(NSInteger)index;

-(void) drawingManagerViewAdd:(DrawingManagerView *)view;


@end

NS_ASSUME_NONNULL_END
