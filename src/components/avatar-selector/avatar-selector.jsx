import React from 'react'
import {Grid,List}from 'antd-mobile'
import PropTypes from 'prop-types'
export default class AvatarSelector  extends React.Component{
    constructor(props){
        super(props);

        this.avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(text => ({
                icon: require(`./imgs/${text}.png`),
                text
            }))
    }
    static proptypes={
        setAvatar:PropTypes.func.isRequired
    }

    handleClick=(item)=>{
        this.setState(item);
        this.props.setAvatar(item.text)
    }
    state = {
        icon: null,
        text: ''
    };


    render(){
       const gridHeader=this.state.icon?<p>已选择：<img src={this.state.icon} alt="icon"/></p>:'请选择一个头像';
        return(
            <List renderHeader={()=>gridHeader}>
                <Grid data={this.avatarList}
                    onClick={(item)=>{this.handleClick(item)}}
                    columnNum={5}
                />
            </List>
        )
    }
}