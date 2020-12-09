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
                <div className="modalBox">
                    <div className="logoutMsg">
                        <h3>로그아웃 되었습니다.</h3>
                        <hr />
                        <div>목표를 위해 화이팅!!</div>
                        <hr />
                    </div>
                    <button className="logoutModalBtn" onClick={closeModal}>확인</button>
                </div>
            </div>, document.getElementById("modal_root")
        )
    }
    return null;
})

export default Signout;