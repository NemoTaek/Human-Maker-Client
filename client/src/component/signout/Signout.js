import React from 'react';
import './Signout.css'


function Signout({isModalState, onClickClose}) {

    
    return (
        <div className={isModalState ? "logoutModalOp" : "logoutModalCl"}>
            <div className="logoutMsg">
                <h3>로그아웃 되었습니다.</h3>
                <div>목표를 위해 화이팅!!</div>
                <button className="logoutModalBtn" onClick={onClickClose}></button>
            </div>
        </div>
    );
}

export default Signout;