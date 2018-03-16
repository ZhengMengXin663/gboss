import React from 'react'
import {Button,NavBar,InputItem,TextareaItem}from'antd-mobile'
import AvatarSelector from '../../components/avatar-selector/avatar-selector'
import {connect}from 'react-redux'
import {Redirect}from 'react-router-dom'
import {updateUser}from '../../redux/actions'

 class GeniusInfo extends React.Component{
    state = {
        // 头像
        avatar: '',
        // 个人简介或者职位简介
        desc: '',
        // 职位名
        title: ''
    };
    handleChange=(name,val)=>{
        this.setState({[name]:val});
    };
    setAvatar = (avatar) => {
        this.setState({avatar})
    }
    render(){
        const {user} = this.props;
        if(user.avatar){
            return <Redirect to='/genius'/>
        }
        return(
            <div>
                <NavBar>牛人信息完善</NavBar>
                <AvatarSelector setAvatar={this.setAvatar}/>
                <InputItem onChange={(val)=>{this.handleChange('title',val)}}>招聘职位:</InputItem>
                <TextareaItem title='职位要求:'
                              onChange={(val)=>{this.handleChange('desc',val)}}
                />
                <Button onClick={()=>this.props.updateUser(this.state)}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {updateUser}
)(GeniusInfo)