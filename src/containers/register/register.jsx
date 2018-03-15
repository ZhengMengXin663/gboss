import React from 'react'
import {Button,NavBar,WhiteSpace,WingBlank,Radio,List,InputItem}from 'antd-mobile'
import Logo from "../../components/logo/logo";
import {register}from '../../redux/actions'
import {connect} from 'react-redux'
import {Redirect}from'react-router-dom'

let RadioItem=Radio.RadioItem;

class Register extends React.Component{
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
   };
    goLogin=()=>{
        let {user}= this.props;
        user.msg='';
       this.props.history.replace('/login')
    };
    handleRegister=()=>{
        this.props.register(this.state)
    };
    render(){
        let {user}=this.props;
        console.log(this.props)
        if(user.redirectTo){
            return <Redirect to={user.redirectTo}/>
        }
        return(
            <div>
             <NavBar>注册页面</NavBar>
                <Logo/>
                <WingBlank>
                 <List>
                     {user.msg?<p className='error-msg'>{user.msg}</p>:''}
                     <InputItem onChange={(val)=>{this.changeState('name',val)}}>用户名</InputItem>
                     <WhiteSpace/>
                     <InputItem type='password' onChange={(val)=>{this.changeState('pwd',val)}}>密码</InputItem>
                     <WhiteSpace/>
                     <InputItem type='password' onChange={(val)=>{this.changeState('pwd2',val)}}>确认密码</InputItem>
                     <WhiteSpace/>
                     <RadioItem checked={this.state.type==='genius'} onClick={()=>{this.changeState('type','genius')}}>牛人</RadioItem>
                     <RadioItem checked={this.state.type==='boss'} onClick={()=>{this.changeState('type','boss')}}>BOSS</RadioItem>
                     <WhiteSpace/>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                    <Button onClick={this.goLogin}>已有账号</Button>
                 </List>
                </WingBlank>
            </div>
        )
    }
}


export default connect(
    state => ({user:state.user}),
{register}
)(Register)