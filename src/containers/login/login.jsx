import React from 'react'
import {Button,NavBar,WhiteSpace,WingBlank,Radio,List,InputItem}from 'antd-mobile'
import Logo from "../../components/logo/logo";
export default class Login extends React.Component{
    state={
        name:'',
        pwd:''
    };
    goRegister=()=>{
        this.props.history.replace('/register')
    };
    cahngState=(name,val)=>{
        this.setState({[name]:val})
    }
    render(){
        return(
            <div>
               <NavBar>欢迎登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={(val)=>{this.cahngState('name',val)}}>用户名</InputItem>
                        <InputItem type='password' onChange={(val)=>{this.cahngState('pwd',val)}}>密码</InputItem>
                        <Button type='primary'>登录</Button>
                        <Button onClick={this.goRegister}>还没有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}