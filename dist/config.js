// eslint-disable-next-line no-unused-vars
const appConfig = {
  // 主服务API端口
  mainServerPort: "50113",
  // 主服务signalR端口
  mainSignalRPort: "50114",

  // 教室服务API端口
  gatewaySeverPort: "50120",
  // 教室服务signalR端口
  gatewaySignalRPort: "50118",

  // signalR心跳包间隔时长
  SignalRHeartTime: 1000,

  errorLog: "development",
  showLog: true,
  isTest: false,

  // 富文本最多添加图片数
  editorPictureMaxNum: 3
};
