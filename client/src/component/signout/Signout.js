import React from 'react';
// import {useSelector} from 'react-redux'
import './Signout.css'


function Signout({onLogout}) {
    // const isLogin = useSelector(state => state.login.isLogin)
    // console.log(isLogin)


    const onClickLogout = (e) => {
        e.preventDefault()
        onLogout();
        document.location.replace("/")
    }

    return (
        <div>
            <div className="logoutMsg">
                <h3>로그아웃 되었습니다.</h3>
                <div>목표를 위해 화이팅!!</div>
                <button className="logoutModalBtn" onClick={onClickLogout}>로그아웃</button>
            </div>
        </div>
    );
}

export default Signout;