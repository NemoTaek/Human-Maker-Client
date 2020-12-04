import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Signout from '../component/signout/Signout';
import { logout } from '../modules/login';


const LogoutContainer = () => {
    
    const dispatch = useDispatch();
    const onLogout = useCallback(()=>
        dispatch(logout()),[dispatch]
    )
    return (
        <Signout onLogout={onLogout} />
    )

}

export default LogoutContainer;