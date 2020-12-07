import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import logo from "../../img/dangoon.png"
import Logout from "../signout/Signout"

function Nav({ status }) {
  const showLogout = () => {
    let modal = document.getElementsByClassName("logout_modal_wrap")[0];
    modal.style.display = 'flex';
    return <Logout></Logout>
  }
  return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt=""></img>
        </NavLink>
      </div>

      {status ? (
        <div className="login_menu">
          <div className="menu">
            {/* <NavLink to="/">로그아웃</NavLink> */}
            <button className="logout_btn" onClick={showLogout}>로그아웃</button>
          </div>
          <div className="menu">
            <NavLink to="/mypage">마이페이지</NavLink>
          </div>
        </div>
      ) : (
          <div className="login_menu">
            <div className="menu">
              <NavLink to="/login">로그인</NavLink>
            </div>
            <div className="menu">
              <NavLink to="/signup">회원가입</NavLink>
            </div>
          </div>
        )}
    </nav>
  );
}

export default Nav;