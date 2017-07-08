let WSServer = require('ws').Server; //引入一个类
/*端口号是用来区分同一台计算机上的不同服务程序的*/
let server = new WSServer({port: 8080});
// 当服务器收到客户端的请求时，会执行对应的回调函数
// 类似http中的req,res; (socket = request + response) 每个客户端都有自己的socket对象
server.on('connection', function (socket) {
    socket.on('message', function (msg) {//服务器接收客户端消息的函数
        console.log(msg);//msg代表客户端发过来的消息
        socket.send('服务器回应: ' + msg);   //服务向相客户端发送的消息
    })
});

