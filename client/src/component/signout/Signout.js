import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from "react-dom"
// import {useSelector} from 'react-redux'
import './Signout.css'



const Signout = forwardRef((props, ref) => {

    const [display, setDisplay] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            modalOpen: () => openModal(),
            modalClose: () => closeModal()
        }
    })

    const openModal = () => {
        setDisplay(true);
    }

    const closeModal = () => {
        setDisplay(false);
        props.onLogout();
        document.location.replace("/")
    }
    const clickBg = () => {
        setDisplay(false);
    }


    if (display) {
        return ReactDOM.createPortal(
            <div className="modalWrapper">
                <div className="modalBg" onClick={clickBg} ></div>
                <div className="sign_out_modalBox">
                    <div className="logoutMsg">
                        <h3>로그아웃 되었습니다.</h3>
                        <div className="todayMsg">
                            <p>인간이 되는 그날까지....</p>
                        </div>
                        <div className="logoutBtnContainer">
                         <button className="logoutModalBtn" onClick={closeModal}>화이팅!!</button>
                        </div>
                    </div>   
                </div>
            </div>, document.getElementById("modal_root")
        )
    }
    return null;
})

export default Signout;