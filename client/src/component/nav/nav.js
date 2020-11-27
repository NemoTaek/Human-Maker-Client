import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
import logo from "../../img/dangoon.png"

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo}></img>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">로그인</NavLink>
        </li>
        <li>
          <NavLink to="/signup">회원가입</NavLink>
        </li>
        <li>
          <NavLink to="/logout">로그아웃</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;