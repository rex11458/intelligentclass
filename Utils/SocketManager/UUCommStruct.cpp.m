//
//  UUCommStruct.h.m
//  intelligentclass
//
//  Created by LiuRex on 2019/9/25.
//  Copyright © 2019 RexLiu. All rights reserved.
//

#include "UUCommStruct.h.h"
#import "MJExtension.h"

const unsigned int MSG_HEAD_MARK = 0x78563412;


int UUCommAttribute_getBodyLength(UUCommBody *pBody){
    return sizeof(UUCommBody) - JSON_BUFFER_LENGTH + pBody->length;
}

int UUCommAttribute_getTotalLength(UUCommAttribute *attribute){
    
    return sizeof(UUCommHead) + UUCommAttribute_getBodyLength(&attribute->body);
}


UUCommRequest* UUMarket__CreateRequest(UUCommBody *body, UUCommHead *head){
    int n_len = sizeof(UUCommHead) + UUCommAttribute_getBodyLength(body);
    
    UUCommRequest *m_request = malloc(n_len);
    
    memcpy(&m_request->head, head, sizeof(UUCommHead));
    
    memcpy(&m_request->body, body, UUCommAttribute_getBodyLength(body));
  
    return m_request;
}

UUCommHead *commHead(){
    
    UUCommHead *head = malloc(sizeof(UUCommHead));
    
    head->mark = MSG_HEAD_MARK;
    head->mType = 1;
    head->socketId = 0;
    return head;
}

UUCommRequest *sendRequest(short mClientId,NSDictionary *jsonObject, UUMessageDataType dataType){
    
    
    NSStringEncoding  gbkEncoding = CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000);
    
    NSData *data = [[jsonObject mj_JSONString] dataUsingEncoding:gbkEncoding];
    
    char *cAttributes = (char *)data.bytes;
    
    unsigned int length = (unsigned int)data.length;
    
    UUCommHead *head = commHead();
    int bLength = sizeof(UUCommBody) - JSON_BUFFER_LENGTH + length ;
    UUCommBody *body = malloc(bLength);
    head->bLength = bLength;
    head->socketId = mClientId;
    body->mClientId = mClientId;
    body->mJsonType = dataType;
    body->length = length;
    memcpy(body->cAttributes, cAttributes, length);
    
    return UUMarket__CreateRequest(body, head);
    
}

UUCommRequest *sendHeartbeatRequest(short mClientId, NSString *stuName){
    
    int num = 0;

    NSDictionary *jsonObject = @{@"num":@(num),@"username":stuName};
    
    UUMessageDataType dataType = UUMessageClientHeartbeatType;
    
    return sendRequest(mClientId, jsonObject,dataType);
}

UUCommRequest *sendBaseInfoRequest(short mClientId, NSString *stuName){
  
    NSDictionary *jsonObject = @{@"StudentNumber":@"",@"StudentName":stuName,@"Version":@""};
    
    UUMessageDataType dataType = UUMessageSendBaseInfoType;
    
    return sendRequest(mClientId, jsonObject,dataType);

}



BOOL UUCommAttribute_isValidResponse(UUCommResponse *response){

    if(response->head.mark != MSG_HEAD_MARK){
        
        return NO;
    }
    
    
    
    
    return YES;
}


NSDictionary *responseJsonObject(UUCommResponse *response){
    if(!UUCommAttribute_isValidResponse(response)){
        return nil;
    }
    
    UUCommBody body = response->body;
    
    NSData *m_data = [NSData dataWithBytes:body.cAttributes length:body.length];

    NSStringEncoding  gbkEncoding = CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000);

    NSString *jsonString = [[NSString alloc] initWithData:m_data encoding:gbkEncoding];

    return [jsonString mj_JSONObject];
}




//typedef struct packet_header{
//    int mark1;  // 0x10111213
//    short mark2;  // 0x1415
//    char mark3;  // 0x16
//    char mark4;  // 0x17 ????
//
//}PacketHeader;
//
//typedef struct packet_tail{
//    int tail; //0x1819;
//}PacketTail;
//
//
//typedef struct frame_packet{
//    PacketHeader header;
//    int curTimeBuf;  // 0 自增
//    int p_length;   // 帧长度
//    int data[0];
//    PacketTail tail;
//}FramePacket;


int curTimeBuf = 0;
FramePacket *sendPacket(NSData *data){
    PacketHeader *header = malloc(sizeof(PacketHeader));
    
    header->mark1 = 0x13121110;
    header->mark2= 0x1514;
    header->mark3= 0x16;
    header->mark4 = curTimeBuf;

//    header->mark = 0x16151413121110;
    unsigned int p_length = (unsigned int)data.length + 2;
//    char d[p_length] = (char *)data.bytes;
    FramePacket *packet = malloc(sizeof(FramePacket) + p_length - 1);
    memcpy(&packet->header, header, sizeof(PacketHeader));
    packet->curTimeBuf = curTimeBuf;
    packet->p_length = p_length;
    memcpy(&packet->data, data.bytes,p_length);
    short tail = 0x1918;
    memcpy(&packet->data + p_length - 2 , &tail, 2);
    curTimeBuf++;
    return packet;
}

int packet_length(FramePacket *packet){

    return sizeof(FramePacket) + packet->p_length - 1;
}
