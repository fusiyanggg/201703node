let mongoose = require('mongoose');  //引入mongoose模块
let conn = mongoose.createConnection('mongodb://127.0.0.1/201703chat');  //创建连接对象
module.exports = conn.model('Message', new mongoose.Schema({
    username: String,
    content: String,
    createAt: {
        type: Date,
        igdefault: Date.now
    }
}));