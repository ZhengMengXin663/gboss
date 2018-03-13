import React from 'react'
import {Button,NavBar,WhiteSpace,WingBlank,Radio,List,InputItem}from 'antd-mobile'
import Logo from "../../components/logo/logo";

let RadioItem=Radio.RadioItem;

export default class Register extends React.Component{
    state={
        name:'',
        pwd:'',
        pwd2:'',
        type:'boss'
    };

   changeState=(name,val)=>{
       this.setState({
       [name]:val
       })
   }
    goLogin=()=>{
       this.props.history.replace('/login')
    };
    render(){
        return(
            <div>
             <NavBar>注册页面</NavBar>
                <Logo/>
                <WingBlank>
                 <List>
                     <InputItem onChange={(val)=>{this.changeState('name',val)}}>用户名</InputItem>
                     <WhiteSpace/>
                     <InputItem type='password' onChange={(val)=>{this.changeState('pwd',val)}}>密码</InputItem>
                     <WhiteSpace/>
                     <InputItem type='password' onChange={(val)=>{this.changeState('pwd2',val)}}>确认密码</InputItem>
                     <WhiteSpace/>
                     <RadioItem checked={this.state.type==='genius'} onClick={()=>{this.changeState('type','genius')}}>牛人</RadioItem>
                     <RadioItem checked={this.state.type==='boss'} onClick={()=>{this.changeState('type','boss')}}>BOSS</RadioItem>
                     <WhiteSpace/>
                    <Button type='primary'>注册</Button>
                    <Button onClick={this.goLogin}>已有账号</Button>
                 </List>
                </WingBlank>
            </div>
        )
    }
}