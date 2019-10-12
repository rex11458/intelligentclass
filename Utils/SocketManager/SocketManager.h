//
//  SocketManager.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/25.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CocoaAsyncSocket/GCDAsyncSocket.h>
@class SocketHandler;
@class StreamHander;
extern NSString * _Nonnull const SocketdidReceivedStartPrjScreenNotification;
extern NSString * _Nonnull const SocketdidReceivedPausePrjScreenNotification;
extern NSString * _Nonnull const SocketdidReceivedStopPrjScreenNotification;

typedef enum : NSUInteger {
    SocketOfflineByServer,
    SocketOfflineByUser,
} SocketOfflineType;



NS_ASSUME_NONNULL_BEGIN

typedef void(^ReceivedDataBlock) (NSData *data);
typedef void(^Failure)(NSError *error);
typedef void (^Success)(GCDAsyncSocket *socket);


@interface SocketManager : NSObject

@property (nonatomic, strong) NSDictionary<NSString *, SocketHandler *> *mgrs;

@property (nonatomic, copy) NSArray<NSString *> *ips;

+ (SocketManager *)manager;


@end


@interface SocketHandler : NSObject<GCDAsyncSocketDelegate>

@property (nullable, nonatomic, strong) GCDAsyncSocket *socket;

@property (nonatomic, copy, readonly) NSString *host;

@property (nonatomic, assign, readonly) UInt16 port;

@property (nonatomic, assign, readonly) BOOL isConnected;

@property (nonatomic,strong) NSTimer *connectTimer; //计时器

@property (nonatomic, strong) StreamHander *streamHandler;

@property (nonatomic, assign, readonly) BOOL isStreaming;

- (void)connetHost:(NSString *)host port:(UInt16)port;

- (void)disconnect;

- (void)sendSteam:(NSData *)data;


@end


@interface StreamHander : NSObject<GCDAsyncSocketDelegate>


@property (nullable, nonatomic, strong) GCDAsyncSocket *socket;

@property (nonatomic, copy, readonly) NSString *host;

@property (nonatomic, assign, readonly) UInt16 port;

@property (nonatomic, assign, readonly) BOOL isConnected;


- (void)connetHost:(NSString *)host port:(UInt16)port;

- (void)disconnect;

- (void)sendStream:(NSData *)data;

@end




NS_ASSUME_NONNULL_END
