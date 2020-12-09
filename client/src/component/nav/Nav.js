import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import logo from "../../img/dangoon.png"
import Signout from "../signout/Signout";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup"





function Nav({ isLogin, onLogin }) {
  // console.log(isLogin)
  isLogin = true;

  const logoutRef = useRef();
  const loginRef = useRef();
  const signupRef = useRef();

  const loginOpenModal = () => {
    loginRef.current.loginOpen();
  }
  const logoutOpenModal = () => {
    logoutRef.current.modalOpen();
  }
  const signupOpenModal = () => {
    signupRef.current.signupOpen();
  }



 return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt=""></img>
        </NavLink>
      </div>

      {isLogin ? (
        <div className="login_menu">
          <div className="logout_btn">
            <button onClick={logoutOpenModal} >로그아웃</button>
            <Signout isLogin={isLogin} ref={logoutRef} />
          </div>
         
          <div className="menu">
            <NavLink to="/mypage">마이페이지</NavLink>
          </div>
        </div>
      ) : (
          <div className="login_menu">
            <div className="logout_btn">
              <button onClick={loginOpenModal} >로그인</button>
              <Signin ref={loginRef} onLogin={onLogin} />
            </div>

            <div className="signupBtnContainerWrap">
              <button onClick={signupOpenModal} >회원가입</button>
              <Signup ref={signupRef} />
            </div>
          </div>
        )}

    </nav>
  );
}

export default Nav;