import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Human Maker</NavLink>
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
    </div>
  );
}

export default Nav;