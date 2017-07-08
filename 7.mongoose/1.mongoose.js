//1. 引入mongoose模块
let mongoose = require('mongoose');
//2. 链接数据库 固定写法 :mongodb://127.0.0.1:27017/数据库的名字
mongoose.connect('mongodb://127.0.0.1:27017/201703node', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('数据库连接成功')
    }
});

let UserSchema = new mongoose.Schema({
    username: String,
    age: Number,

}, {collection: 'school'});//集合的名称
//Schema 不能操作数据库，只有模型才能操作数据库
// model 1 参数事模型的名称，是唯一的
let User = mongoose.model('User', UserSchema); //两个参数表示定义
// console.log(mongoose.model('Use')); //一个参数表示获取
// exports.User = User
/*
User.create({username: 'zfpx1', age: 1010, home: 'beijing'}, function (err, doc) {
    if (err) {
        console.error(err);
    } else {
        //doc是保存成功的文档对象

        console.log(doc);
    }

});*/
/*


User.find({}, function (err, docs) {

    console.log(docs, '============');

});

User.update({username: 'zfpx1'}, {age: 99},{multi:true}, function (err, result) {
    console.log(result);
});
*/
/*

User.remove({username:'zfpx'},function (e,r) {

    console.log(r);

});*/
let Arr=[]
for (var i = 0; i < 10 ;i++) {
    Arr.push()
}