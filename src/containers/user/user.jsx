import React from 'react'
import {resetUser}from'../../redux/actions'
import {connect}from'react-redux'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile'
import cookies from 'browser-cookies'
const Item = List.Item;
const Brief = Item.Brief;

class User extends React.Component{
    handClick=()=>{
        Modal.alert('注销', '确认退出登录吗?', [
            {
                text: '取消',
                onPress: () => ''},
            {
                text: '确认',
                onPress: () => {
                    // 清除cookie中的userid
                    cookies.erase('userId');

                    // 重置redux中的user状态
                    this.props.resetUser()
                }
            }
        ])
    };
    render(){
        const {name, avatar, type, title, desc, money, company} = this.props.user;
        return(
            <div>
                <Result
                    img={<img src={require(`../../assets/imgs/${avatar}.png`)} style={{width: 50}} alt="avatar"/>}
                    title={name}
                    message={company}
                />

                <List renderHeader={() => '相关信息'}>
                    <Item multipleLine>
                        {title? <Brief>{title}</Brief>:null}
                        <Brief>{desc}</Brief>
                        {money?<Brief>{money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item onClick={this.handClick}>退出登录</Item>
                </List>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {resetUser}
)(User)