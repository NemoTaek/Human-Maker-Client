import React from "react";
import './ChangePassword.css';

function ChangePassword() {
  return (
    <div className="change_pw_wrap">

      <div className="id">
        <span>아이디: </span>
        <input type="text" autoFocus required></input>
      </div>
      <div className="change_pw">
        <span>변경할 비밀번호: </span>
        <input type="password" required></input>
      </div>
      <div className="change_pw_check">
        <span>비밀번호 확인: </span>
        <input type="password" required></input>
      </div>

      <button className="change_btn">변경하기</button>

    </div>
  );
}

export default ChangePassword;
