const express =require('express')
app=express();
const bodyParser = require('body-parser') // 解析请求体
const cookieParser = require('cookie-parser') // 解析cookie
const appRouter=require('./appRouter');
// app.use('/', function (req, res) {
//     res.send('hello World!')
// });
app.use(cookieParser()) ;// 解析cookie数据
app.use(bodyParser.json()); // 解析请求体(ajax请求: json数据格式)
app.use(bodyParser.urlencoded({ extended: false })); // 解析请求体(表单数据)
// 注册上路由器
app.use('/api',appRouter);

app.listen('3010',function(){
    console.log('this is open port : 3010')
});