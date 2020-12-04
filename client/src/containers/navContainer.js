import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../component/nav/Nav';



const NavContainer = () => {
    const isLogin = useSelector(state => state.login.isLogin)
    console.log(isLogin)
    return (
        <Nav isLogin={isLogin} />
    )

}

export default NavContainer;