import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../component/nav/Nav';
import { login } from '../modules/login'



const NavContainer = () => {
    const isLogin = useSelector(state => state.login.isLogin)
    
    const dispatch = useDispatch();
    const onLogin = React.useCallback(()=>
        dispatch(login()),[dispatch]
    )

    return (
        <Nav isLogin={isLogin} onLogin={onLogin}/>
    )

}

export default NavContainer;