import React from 'react'
import {Button,NavBar,WhiteSpace,WingBlank,Radio,List,InputItem}from 'antd-mobile'
import {connect}from'react-redux'
import {login}from'../../redux/actions'
import {Redirect}from'react-router-dom'
import Logo from "../../components/logo/logo";
class Login extends React.Component{
    state={
        name:'',
        pwd:''
    };
    goRegister=()=>{
        let {user}= this.props;
       user.msg='';
        this.props.history.replace('/register')

    };
    cahngState=(name,val)=>{
        this.setState({[name]:val})
    }
    handleRegister=()=>{
      this.props.login(this.state)
    };
    render(){
        let {user}=this.props;
        if(user.redirectTo){
            return <Redirect to={user.redirectTo}/>
        }
        return(
            <div>
               <NavBar>欢迎登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {user.msg?<p className='error-msg'>{user.msg}</p>:''}
                        <InputItem onChange={(val)=>{this.cahngState('name',val)}}>用户名</InputItem>
                        <InputItem type='password' onChange={(val)=>{this.cahngState('pwd',val)}}>密码</InputItem>
                        <Button type='primary' onClick={this.handleRegister}>登录</Button>
                        <Button onClick={this.goRegister}>还没有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {login}
)(Login)