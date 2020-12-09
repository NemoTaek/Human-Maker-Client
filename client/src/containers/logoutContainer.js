import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Signout from '../component/signout/Signout';
import { logout } from '../modules/login';
import { closeModal } from '../modules/signOutModal'



const LogoutContainer = () => {
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();

    const onLogout = useCallback(()=>
        dispatch(logout()),[dispatch]
    );
    const modalClose = useCallback(() => 
        dispatch(closeModal()),[dispatch]
    );

   
    return (
        <Signout onLogout={onLogout} isModalOpen={isModalOpen} onRequestClose={modalClose} />
    )

}

export default LogoutContainer;