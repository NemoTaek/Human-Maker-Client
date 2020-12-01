import React, { useState } from 'react';
import './Signout.css'
import '../nav/nav'

function Signout({isModalOpen, isModalClose}) {

    const [isModalState, setIsModalState] = useState(isModalOpen);
    const [isModalCloseBtn, setIsModalCloseBtn] = useState(isModalClose)

    const onClickModalBtn = () => {
        setIsModalCloseBtn(!isModalCloseBtn);
        setIsModalState(!isModalState)
    }

    return (
        <div className={isModalState ? "logoutModalOp" : "logoutModalCl"}>
            <div className="logoutMsg">
                <h3>로그아웃 되었습니다.</h3>
                <div>목표를 위해 화이팅!!</div>
                <button className="logoutModalBtn" onClick={onClickModalBtn}></button>
            </div>
        </div>
    );
}

export default Signout;