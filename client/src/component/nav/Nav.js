import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import logo from "../../img/dangoon.png"

function Nav({ status }) {
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
            <NavLink to="/logout">로그아웃</NavLink>
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