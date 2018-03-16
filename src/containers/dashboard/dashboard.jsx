import React from 'react'
import {Route,Switch,Redirect} from'react-router-dom'
import BossInfo from'../boss-info/boss-info'
import GeniusInfo from '../genius-info/genius-info'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import {connect}from 'react-redux'
import {getUser}from'../../redux/actions'
import {getRedirectPath} from '../../utils/index'
import cookies from 'browser-cookies'
class Dashboard extends React.Component{

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
        console.log(user)
        if(!user._id){
            console.log(0);
            return null
        }else{
            const pathname =this.props.location.pathname;
            if(pathname==='/'){
                const path= getRedirectPath(user.type,user.avatar)
                return <Redirect to={path}/>
            }
        }
        return(
            <div>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo} />
                    <Route path='/geniusinfo' component={GeniusInfo}/>
                    <Route path='/boss' component={Boss}/>
                    <Route path='/genius' component={Genius}/>
                </Switch>

            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {getUser}
)(Dashboard)