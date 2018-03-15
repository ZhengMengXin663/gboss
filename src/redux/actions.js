import {ERROR_MSG,AUTH_SUCCESS}from'./action-types'

import {reqLogin,reqRegister}from'../api'
//同步错误消息
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
//同步成功消息
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})
//异步请求注册消息
export function register({name,pwd,pwd2,type}) {
    if(!name || !pwd){
    //当name 或 pwd 没输入时 调用 同步错误消息
       return errorMsg('用户名和密码必须输入')
    }else if(pwd!==pwd2){
        return errorMsg('两次密码必须一致')
    }
    //如果成功了, 发异步的ajax请求
    return dispatch =>{
        reqRegister({name,pwd,type}).then(response=>{
            const result=response.data;
            console.log(result);
            if(result.code===0){
                // 如果成功了, 分发一个成功的action
                dispatch (authSuccess(result.data))
            }else{
                // 如果失败了, 分发一个错误信息的action
                dispatch (errorMsg(result.msg))
            }
        })
    }
    
}
export function login({name,pwd}){
    if(!name||!pwd){
        return errorMsg('账户或密码不能为空')
    }
    return dispatch=>{
        reqLogin({name,pwd}).then(response=>{
            const result= response.data;
            if(result.code===0){
                dispatch(authSuccess(result.data))
            }else{
                dispatch(errorMsg(result.msg))
            }
        })
    }
}