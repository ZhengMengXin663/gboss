/*
后台应用的路由器模块
1. 引入express
2. 得到路由器
3. 注册n个路由
4. 向外暴露路由器
5. 通过 app使用上路由器
 */

// 1. 引入express
const expiress=require('express');
const md5=require('blueimp-md5');
// 2. 得到路由器
const router = expiress.Router();
// 3. 注册n个路由
const models = require('./models');
//  接收Model
const UserModel = models.getModel('user');
//加入过滤
const filter={pwd:0,__v:0};
/*
const models = require('./models');
const UserModel = models
1. 获取请求参数数据
2. 处理数据
3. 返回响应数据
 */

router.post('/register',function(req,res){
    const {name,pwd,type}=req.body;
    UserModel.findOne({name},function(err,user){
        if(user){
            res.send({code:1,msg:'此用户已存在'})
        }else{
            new UserModel({name,type,pwd:md5(pwd)}).save(
                function (err,user) {
                    res.cookie('user',user._id);
                    res.send({code:0,data:{_id:user._id, name,type}})
                })
        }
    })
})
router.post('/login',function(req,res){
    const {name,pwd}=req.body;
    UserModel.findOne({name,pwd:md5(pwd)},filter,function(err,user){
        if(!user){
            res.send({code:1,msg:'用户名或密码错误'})
        }else{
            res.cookie('user',user._id)
            res.send({code:0,data:user})
        }
    })
})


module.exports=router;