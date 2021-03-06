import React from 'react'
import {TabBar}from 'antd-mobile'
import PropTypes from'prop-types'
import {withRouter}from'react-router-dom'
//导航底部的tab块
const Item = TabBar.Item;
class NavFooter extends React.Component{
    static propTypes = {
        navList: PropTypes.array.isRequired
    };
    render(){
        // nav.hide = true/false hide代表当前项应该被隐藏
        const navList=this.props.navList.filter( nav => !nav.hide) ;// 回调函数返回值为true, 当前元素就会留下, 否则不留
        const {pathname}=this.props.location;

        return(
            <TabBar>
                {
                    navList.map(nav => (<Item
                        key={nav.path}
                        title={nav.text}
                        icon={{uri: require(`./imgs/${nav.icon}.png`)}}
                        selectedIcon={{uri:require(`./imgs/${nav.icon}-active.png`)}}
                        selected={pathname===nav.path}
                        onPress={()=>{
                        this.props.history.replace(nav.path)
                        }}
                    />))
                }

            </TabBar>
        )
    }
}
export default withRouter(NavFooter)