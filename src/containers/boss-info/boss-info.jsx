import React from 'react'
import {Button,NavBar,InputItem,TextareaItem}from'antd-mobile'
import AvatarSelector from '../../components/avatar-selector/avatar-selector'
import {connect}from 'react-redux'
import {Redirect}from 'react-router-dom'
import {updateUser}from'../../redux/actions'
class BossInfo extends React.Component{
    state = {
        // 头像
        avatar: '',
        // 个人简介或者职位简介
        desc: '',
        // 职位名
        title: '',
        // 公司名称
        company: '',
        // 工资
        money: ''
    };
    handleChange=(name,val)=>{
        this.setState({[name]:val});
    };
    // 设置更新avatar
    setAvatar = (avatar) => {
        this.setState({avatar})
    };
    render(){
        const {user} = this.props;
        // 如果用户信息已完善, 自动跳转到boss主界面
        if(user.avatar) {
            return <Redirect to='/boss'/>
        }
        return(
            <div>
                <NavBar>BOSS信息完善</NavBar>
                <AvatarSelector setAvatar={this.setAvatar}/>
                <InputItem onChange={(val)=>{this.handleChange('title',val)}}>招聘职位:</InputItem>
                <InputItem onChange={(val)=>{this.handleChange('company',val)}}>公司名称:</InputItem>
                <InputItem onChange={(val)=>{this.handleChange('money',val)}}>职位薪资:</InputItem>
                <TextareaItem title='职位要求:'
                              rows={3}
                              onChange={(val)=>{this.handleChange('desc',val)}}
                />
                <Button type='primary' onClick={()=>this.props.updateUser(this.state)}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {updateUser}
)(BossInfo)