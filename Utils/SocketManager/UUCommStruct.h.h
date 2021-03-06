//
//  UUCommStruct.h.h
//  intelligentclass
//
//  Created by LiuRex on 2019/9/25.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#import <Foundation/Foundation.h>

#pragma GCC diagnostic ignored "-Wpragma-pack"
#pragma pack(1)

#define JSON_BUFFER_LENGTH 256

typedef unsigned short UUMessageDataType;

/** 数据类型 */
typedef enum : NSUInteger {
    UUMessageNULLType                = 0,
    UUMessageSendBaseInfoType        = 1,  // 发送基本信息
    UUMessageClientHeartbeatType     = 2,  //客户端心跳包
    UUMessageRequestBaseInfoType     = 3,  // 服务端来的请求基本信息
    UUMessageBeginPrjScreenType      = 4,  //发送到客户端开始推流
    UUMessageStopPrjScreenType       = 5,  //发送到客户端停止推流
    UUMessageServerHeartbeatType     = 6,  //服务端心跳包
} UUMessageType;


typedef struct _UUCommHead {

    int            mark;       //包识别码  0x78563412
    short          mType;    // 包类型  1
    short          socketId;
    unsigned short bLength;
    
} UUCommHead;

typedef struct _UUCommBody{
    
    short                mClientId;
    UUMessageDataType    mJsonType;
    unsigned short       length;
    char                 cAttributes[JSON_BUFFER_LENGTH];  // JSON数据
} UUCommBody;


typedef struct _UUCommAttributes{
    UUCommHead          head;
    UUCommBody          body;
    
}UUCommRequest,UUCommResponse,UUCommAttribute;



UUCommHead *commHead(void);

int UUCommAttribute_getBodyLength(UUCommBody *pBody);
int UUCommAttribute_getTotalLength(UUCommAttribute *attribute);
BOOL UUCommAttribute_isValidResponse(UUCommResponse *response);

UUCommRequest* UUMarket__CreateRequest(UUCommBody *body, UUCommHead *head);

UUCommRequest *sendHeartbeatRequest(short mClientId, NSString *stuName);
UUCommRequest *sendBaseInfoRequest(short mClientId, NSString *stuName,float width, float height);


NSDictionary *responseJsonObject(UUCommResponse *response);



/**steam packet*/

typedef struct packet_header{
    int   mark1;  // 0x13121110
    short mark2;  //  0x1514
    char mark3; //  0x16
    char mark4;   // 0x1514
    //    char
//    long mark;
    
}PacketHeader;

typedef struct packet_tail{
    int tail; //0x1819;
}PacketTail;


typedef struct frame_packet{
    PacketHeader header;
    int curTimeBuf;  // 0 自增
    unsigned int p_length;   // 帧长度
    char data[1];
//    short tail;
}FramePacket;


FramePacket *sendPacket(NSData *data);
int packet_length(FramePacket *packet);
