import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Signin from '../component/signin/Signin';
import { login } from '../modules/login';


const LoginContainer = () => {
    
    const dispatch = useDispatch();
    const onLogin = useCallback(()=>
        dispatch(login()),[dispatch]
    )
    return (
        <Signin onLogin={onLogin} />
    )

}

export default LoginContainer;