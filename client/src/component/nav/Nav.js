import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import logo from "../../img/dangoon.png"

function Nav(props) {
  console.log(props.isLogin)
  return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt=""></img>
        </NavLink>
      </div>

      {props.isLogin ? (
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

      {/* <ul>
        <li>
          <NavLink to="/">
            <img src={logo}></img>
          </NavLink>
        </li>
        {props.isLogin ? (
          <>
            <li>
              <NavLink to="/logout">로그아웃</NavLink>
            </li>
            <li>
              <NavLink to="/mypage">마이페이지</NavLink>
            </li>
          </>
        ) : (
            <>
              <li>
                <NavLink to="/login">로그인</NavLink>
              </li>
              <li>
                <NavLink to="/signup">회원가입</NavLink>
              </li>
            </>
          )}
      </ul> */}
    </nav>
  );
}

export default Nav;