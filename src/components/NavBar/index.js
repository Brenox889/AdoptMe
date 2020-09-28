import React from 'react'

import logo from '../../assets/logoAdopt.png'

import {Header} from './styles'

export default function NavBar(){
    return(
        <Header>
            <img src={logo} />
        </Header>
    )
}