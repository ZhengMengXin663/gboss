import React from 'react'
import {Route,Switch,Redirect} from'react-router-dom'
import BossInfo from'../boss-info/boss-info'
import GeniusInfo from '../genius-info/genius-info'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import Msg from'../msg/msg'
import User from'../user/user'
import NotFound from '../../components/not-found/not-found'
import {connect}from 'react-redux'
import {getUser}from'../../redux/actions'
import NavFooter from'../../components/nav-footer/nav-footer'
import {getRedirectPath} from '../../utils/index'
import cookies from 'browser-cookies'
import {NavBar}from'antd-mobile';
class Dashboard extends React.Component{
    navList = [
        {
            path: '/boss', // 路由路径
            component: Boss,
            title: '牛人列表',
            icon: 'boss',
            text: '牛人',
        },
        {
            path: '/genius', // 路由路径
            component: Genius,
            title: 'BOSS列表',
            icon: 'job',
            text: 'BOSS',
        },
        {
            path: '/msg', // 路由路径
            component: Msg,
            title: '消息列表',
            icon: 'msg',
            text: '消息',
        },
        {
            path: '/user', // 路由路径
            component: User,
            title: '个人中心',
            icon: 'user',
            text: '我',
        }
    ];


    componentDidMount(){
       const userId= cookies.get('userId');
        const {user}=this.props;
        if(userId&&!user._id){
           this.props.getUser() //获取user并保存到redux中
       }
    }
    render(){
        const userId = cookies.get('userId');
        if(!userId){

            return <Redirect to='/login'/>
        }
        // cookie中有userid
        // redux中的user是否有数据
        const {user}=this.props;
        const pathname =this.props.location.pathname;
        if(!user._id){
            return null
        }else{

            if(pathname==='/'){
                const path= getRedirectPath(user.type,user.avatar)
                return <Redirect to={path}/>
            }

            if(user.type==='boss'){
                this.navList[1].hide=true;
            }else{
                this.navList[0].hide=true;
            }

        }
        const currentNav=this.navList.find(nav=>nav.path===pathname);

            return(

            <div>
                {currentNav?<NavBar>{currentNav.title}</NavBar>:null}
                <Switch>
                    <Route path='/bossinfo' component={BossInfo} />
                    <Route path='/geniusinfo' component={GeniusInfo}/>
                    <Route path='/boss' component={Boss}/>
                    <Route path='/user' component={User} />
                    <Route path='/msg' component={Msg}/>
                    <Route path='/genius' component={Genius}/>
                    <Route component={NotFound}/>
                </Switch>
                {currentNav?<NavFooter navList={this.navList}/>:null}
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {getUser}
)(Dashboard)