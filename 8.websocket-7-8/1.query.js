let express = require('express');
let app = express(); //typeof app 是以个函数
// app是以个请求监听函数，app.listen.启动监听
// app会在客户端请求到来的时候执行

app.get('/clock', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342' /*也可以使用通配符 '*' */); //解决跨域问题。允许来自xxx 访问本服务器
    res.send(new Date().toLocaleString());
});

app.listen(8080); //在特定的端口上监听客户端的请求