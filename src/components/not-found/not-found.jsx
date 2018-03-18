import React from 'react'
import {Button}from 'antd-mobile'
export default class NotFound  extends React.Component{
    render(){
        return(
            <div>
                <p>没有找到页面</p>
                <Button type='primary' onClick={()=>this.props.history.replace('/')}>返回</Button>
            </div>
        )
    }
}