
class SocketObj {
  constructor(socketUrl) {
    this.socketUrl = socketUrl || '';
    this.heartTimer = null
    this.autoConnect = null
  }

  _initWebSocket(){
    uni.connectSocket({
      url: 'ws://123.207.167.163:9010/ajaxchattest',
      header: {
        "content-type": "application/json"
      },
      method: "POST",
      success: () => {
        console.log("连接成功");
      },
      fail() {
        console.log("connectSocket连接失败");
      }
    });
    uni.onSocketOpen(() => {
      console.log("WebSocket连接打开");
      clearInterval(this.autoConnect),
        uni.sendSocketMessage({
          data: "p",
          success() {
            console.log("发送消息成功");
          }, fail: res => {
            console.log('发送消息失败');
          }
        });
      this.heart()
    });
    uni.onSocketError(function (res) {
      console.log("WebSocket连接打开失败");
    });
    uni.onSocketClose( (res)=> {
      console.log("WebSocket 已关闭！");
      this.autoConnect = setTimeout(() => {   //断线重连
        console.log('断线重连')
        this._initWebSocket();
      }, 5000);
    });

    uni.onSocketMessage(function (res) {
      console.log('收到消息', res)
    });
  }

  heart() {  //心跳
    this.heartTimer = setInterval(() => {
      uni.sendSocketMessage({
        data: "p",
        success() {
          console.log("心跳");
        }
      });
    }, 10000);
  }

  close() {
    uni.onSocketOpen(function () {
      uni.closeSocket();
    });
  }
}

export default SocketObj