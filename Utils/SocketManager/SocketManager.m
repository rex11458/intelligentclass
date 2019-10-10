//
//  SocketManager.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/25.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import "SocketManager.h"
#import "UUCommStruct.h.h"
#import "RootViewController.h"
NSString * const SocketdidReceivedStartPrjScreenNotification = @"SocketdidReceivedStartPrjScreenNotification";
NSString *const SocketdidReceivedStopPrjScreenNotification = @"SocketdidReceivedStopPrjScreenNotification";

#define MAX_STREAM_BUFFER_LENGTH 1480

static NSTimeInterval heartbeat_interval = 3;
static NSTimeInterval time_out = 3;

@implementation SocketManager

+ (SocketManager *)manager
{
    static SocketManager *sharedInstace = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        
        sharedInstace = [[self alloc] init];
    });
    
    return sharedInstace;
}

@end


@interface SocketHandler ()

@property (nonatomic, assign) short mClientId;

@end

@implementation SocketHandler

- (instancetype)init{
    if(self = [super init]){
        self.mClientId = 0;
        self.streamHandler = [StreamHander new];
    }
    return self;
}

- (GCDAsyncSocket *)socket{
    if(!_socket){
        _socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_main_queue()];
    }
    
    return  _socket;
}

- (void)connetHost:(NSString *)host port:(UInt16)port{
    _host = host;
    _port = port;
    
    [self connetionToHost];
}



- (void)connetionToHost
{
    if([_socket isConnected]){
        [self disconnect];
    }
    NSError *error = nil;
    
    _socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_main_queue()];
    if(![self.socket connectToHost:_host onPort:_port error:&error]){
        NSLog(@"[JSON Client] connect %@ %@", _host, error);
    }}


- (BOOL)isConnected{
    return _socket.isConnected;
}

- (void)disconnect{
    self.socket.userData = @(SocketOfflineByUser);

    [_socket disconnect];
    _socket = nil;
    
}


/** 发送心跳包 */
- (void)sendHeartbeat{
    
    NSString *username = [RootViewController sharedRootViewController].currentUserName;
   if(!username){
       username = @"";
   }

    UUCommRequest *request = sendHeartbeatRequest(self.mClientId,username);
    
//    NSData *data = [NSData dataWithBytes:request->body.cAttributes length:request->body.length];
    
    NSData *data = [NSData dataWithBytes:request length:UUCommAttribute_getTotalLength(request)];
    
    
    [self.socket writeData:data withTimeout:time_out tag:0];
}

- (void)sendBaseInfo{
    
    NSString *username = [RootViewController sharedRootViewController].currentUserName;
    if(!username){
        username = @"";
    }

    UUCommRequest *request = sendBaseInfoRequest(self.mClientId, username);
    
    NSData *data = [NSData dataWithBytes:request length:UUCommAttribute_getTotalLength(request)];
    
    [self.socket writeData:data withTimeout:time_out tag:0];
    
}

- (void)sendSteam:(NSData *)data{
    [self.streamHandler sendStream:data];
}

- (void)stopStream{
    NSDictionary *data = @{@"ip":self.host};
    [[NSNotificationCenter defaultCenter] postNotificationName:SocketdidReceivedStopPrjScreenNotification object:data userInfo:nil];
    [self.streamHandler disconnect];
}


#pragma mark - GCDAsyncSocketDelegate
- (void)socket:(GCDAsyncSocket *)sock didConnectToHost:(NSString *)host port:(uint16_t)port{
    NSLog(@"[JSON Client] Connected to Host:%@, Port:%d", host, port);
    [sock readDataWithTimeout:-1 tag:0];
    
    //每3s向服务器发送心跳包
    self.connectTimer = [NSTimer scheduledTimerWithTimeInterval:heartbeat_interval target:self selector:@selector(sendHeartbeat) userInfo:nil repeats:YES];
    [self.connectTimer fire];
}




- (void)socketDidDisconnect:(GCDAsyncSocket *)socket withError:(NSError *)error;
{
    [self.connectTimer invalidate];

    NSLog(@"[JSON Client] Closed connection: %@", error);
    
    SocketOfflineType type = [socket.userData unsignedIntegerValue] ;
    
    if (type == SocketOfflineByServer) {
        
//        [self connetionToHost];
    }
    [self stopStream];
}

- (void)socket:(GCDAsyncSocket *)sock didReadData:(NSData *)data withTag:(long)tag;
{
    UUCommAttribute *attribute = (UUCommAttribute *)data.bytes;
    [self dealResponse:attribute];
    [sock readDataWithTimeout:-1 tag:0];
}


- (void)dealResponse:(UUCommAttribute *)attribute{
    
    if(!UUCommAttribute_isValidResponse(attribute)){
        return;
    }
//    UUMessageRequestBaseInfoType     = 3,  // 服务端来的请求基本信息
//    UUMessageBeginPrjScreenType      = 4,  //发送到客户端开始推流
//    UUMessageStopPrjScreenType       = 5,  //发送到客户端停止推流
//    UUMessageServerHeartbeatType     = 6,  //服务端心跳包
    
    self.mClientId = attribute->body.mClientId;
    
    UUMessageDataType dataType = attribute->body.mJsonType;
//    NSLog(@"dataType:%d",dataType);
//    NSDictionary *jsonObject = responseJsonObject(attribute);
//    NSLog(@"jsonObject:%@",jsonObject);
    switch (dataType) {
        case UUMessageServerHeartbeatType:
//            NSLog(@"服务端心跳...");
            break;
        case UUMessageRequestBaseInfoType:
            [self sendBaseInfo];
            break;
        case UUMessageBeginPrjScreenType:{
            NSDictionary *jsonObject = responseJsonObject(attribute);
            NSString * sPort =  [NSString stringWithFormat:@"%@",jsonObject[@"Port"]];
            NSDictionary *data = @{@"ip":self.host,@"port":sPort};
            [[NSNotificationCenter defaultCenter] postNotificationName:SocketdidReceivedStartPrjScreenNotification object:data userInfo:nil];
            
            [self.streamHandler connetHost:_host port:[sPort integerValue]];
        }
            break;
        case UUMessageStopPrjScreenType:{
            [self stopStream];
        }
            break;
    }
}

@end

@implementation StreamHander

- (GCDAsyncSocket *)socket{
    if(!_socket){
        _socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_global_queue(0, 0)];
    }
    
    return  _socket;
}

- (void)connetHost:(NSString *)host port:(UInt16)port{
    _host = host;
    _port = port;
    [self connetionToHost];
}



- (void)connetionToHost
{
    if([_socket isConnected]){
        [self disconnect];
    }
    NSError *error = nil;

    _socket = [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_main_queue()];
    if(![self.socket connectToHost:_host onPort:_port error:&error]){
        NSLog(@"[Stream Client] socket connect %d %@", _port, error);
    }
    
}


- (BOOL)isConnected{
    return _socket.isConnected;
}

- (void)disconnect{
    
    [_socket disconnect];
    _socket = nil;
    
}


/** 推流 */
- (void)sendStream:(NSData *)data{
    
    
    FramePacket *packet = sendPacket(data);
    
    NSData *sendData = [NSData dataWithBytes:packet length:packet_length(packet)];
    NSLog(@"[Stream Client] sendData.length = %ld", sendData.length);

//    NSUInteger totalLength = sendData.length;
//
//    if(sendData.length > MAX_STREAM_BUFFER_LENGTH){
//
//        int postion = 0;
//
//        while ((totalLength - postion) >= MAX_STREAM_BUFFER_LENGTH ) {
//            NSData *subData = [sendData subdataWithRange:NSMakeRange(postion, MAX_STREAM_BUFFER_LENGTH)];
//
//            NSLog(@" subData.length = %ld", subData.length);
//            [self.socket writeData:subData withTimeout:-1 tag:0];
//            postion += MAX_STREAM_BUFFER_LENGTH;
//        }
//
//        NSUInteger tailLength = totalLength - postion;
//        if(tailLength > 0){
//            NSData *subData = [sendData subdataWithRange:NSMakeRange(postion, tailLength)];
//            [self.socket writeData:subData withTimeout:-1 tag:0];
//            NSLog(@" subData.length = %ld", subData.length);
//
//        }
//    }else{
        [self.socket writeData:sendData withTimeout:-1 tag:0];
//    }
}


#pragma mark - GCDAsyncSocketDelegate
- (void)socket:(GCDAsyncSocket *)sock didConnectToHost:(NSString *)host port:(uint16_t)port{
 
    NSLog(@"[Stream Client] Connected to Host:%@, Port:%d Success", host, port);
    [sock readDataWithTimeout:-1 tag:0];

}

- (void)socketDidDisconnect:(GCDAsyncSocket *)sock withError:(NSError *)err{
    NSLog(@"[Stream Client] socketDidDisconnect %@", err);

}

- (void)socket:(GCDAsyncSocket *)sock didWriteDataWithTag:(long)tag{

    
//    NSLog(@"[Stream Client] didWriteDataWithTag");

}

@end
