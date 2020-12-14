import React, { useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";
import { login, logout, rememberid, forgotid } from "../../modules/login"
import { useSelector, useDispatch } from 'react-redux';
import "./Nav.css"
import logo from "../../img/mainlogo.png"
import SignOut from "../signout/Signout";
import SignIn from "../signin/Signin";
import SignUp from "../signup/Signup"

function Nav({ isLogin }) {
  // console.log(isLogin)
  // isLogin = true;

  const logoutRef = useRef();
  const loginRef = useRef();
  const signupRef = useRef();

  const loginOpenModal = () => {
    loginRef.current.loginOpen();
    signupRef.current.signupClose();
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  const logoutOpenModal = () => {
    logoutRef.current.modalOpen();
  }
  const signupOpenModal = () => {
    signupRef.current.signupOpen();
    loginRef.current.loginClose();
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  const rememberId = useSelector(state => state.User.id);
  const isRememberId = useSelector(state => state.login.isRememberId);
  const dispatch = useDispatch();
  const onLogin = useCallback(() => dispatch(login()), [dispatch])
  const onLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const onRememberId = useCallback(() => dispatch(rememberid()), [dispatch])
  const onForgotId = useCallback(() => dispatch(forgotid()), [dispatch])


  return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt=""></img>
        </NavLink>
      </div>

      {isLogin ? (
        <div className="login_menu">

          <div className="nav_btn_container">
            <button className="nav_btn" onClick={logoutOpenModal} >로그아웃</button>
            <SignOut onLogout={onLogout} ref={logoutRef} />
          </div>

          <div className="menu">
            <NavLink to="/mypage">마이페이지</NavLink>
          </div>
        </div>
      ) : (
          <div className="login_menu">

            <div className="nav_btn_container">
              <button className="nav_btn" onClick={loginOpenModal} >로그인</button>
              <SignIn rememberId={rememberId} onLogin={onLogin} isRememberId={isRememberId} 
                      onRememberId={onRememberId} onForgotId={onForgotId} ref={loginRef} />
            </div>

            <div className="nav_btn_container">
              <button className="nav_btn" onClick={signupOpenModal} >회원가입</button>
              <SignUp ref={signupRef} />
            </div>
          </div>
        )}
    </nav>
  );
}

export default Nav;