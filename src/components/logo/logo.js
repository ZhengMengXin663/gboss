import React from 'react'
import LogoImg from './job.png'
import './job.less'

export default class Logo extends React.Component{
    render(){
        return(
            <div className='logoStyle'>
                <img src={LogoImg} alt="logoImage"/>
            </div>
        )
    }
}