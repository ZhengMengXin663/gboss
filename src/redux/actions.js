import {ERROR_MSG,AUTH_SUCCESS,RECEIVE_USER,RESET_USER}from'./action-types'

import {reqLogin,reqRegister,reqUpdateUser,reqUser}from'../api'
//同步错误消息
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
//同步成功消息
const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})

const receiveUser=(user)=>({type:RECEIVE_USER,data:user});
const resetUser=(msg)=>({type:RESET_USER,data:msg});
//异步请求注册消息
export function register({name,pwd,pwd2,type}) {
    if(!name || !pwd){
    //当name 或 pwd 没输入时 调用 同步错误消息
       return errorMsg('用户名和密码必须输入')
    }else if(pwd!==pwd2){
        return errorMsg('两次密码必须一致')
    }
    //如果成功了, 发异步的ajax请求
    return async dispatch =>{
        const response= await reqRegister({name,pwd,type})
        const result=response.data;
        console.log(result);
        if(result.code===0){
            // 如果成功了, 分发一个成功的action
            dispatch (authSuccess(result.data))
        }else{
            // 如果失败了, 分发一个错误信息的action
            dispatch (errorMsg(result.msg))
        }
    }
    
}
export function login({name,pwd}){
    if(!name||!pwd){
        return errorMsg('账户或密码不能为空')
    }
    return async dispatch=>{
        const response= await reqLogin({name,pwd})
        const result= response.data;
        console.log(result);
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }
    }
}

/*
异步更新用户的action
 */
export const updateUser=(user)=>{
    return async dispatch=>{
        const response = await reqUpdateUser(user)
        const result = response.data;
        // 如果成功了, 分发一个接收用户的action
        if(result.code===0) {
            dispatch(receiveUser(result.data))
        } else {
            // 如果失败了, 分发一个重置用户的action
            dispatch(resetUser(result.msg))
        }
    }
}
export const getUser=()=>{
    return async dispatch=>{
        const response = await reqUser()
        const result=response.data;
        if(result.code===0){
            dispatch(receiveUser(result.data))
        }else{
            dispatch(resetUser(result.msg))
        }
    }
}