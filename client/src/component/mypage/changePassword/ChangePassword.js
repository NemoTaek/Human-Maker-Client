import React from "react";
import './ChangePassword.css';

function ChangePassword() {
  return (
    <div className="change_pw_wrap">

      <div className="input_wrap id">
        <p>아이디: </p>
        <input type="text" autoFocus required readOnly></input>
      </div>
      <div className="input_wrap current_pw">
        <p>현재 비밀번호: </p>
        <input type="password" required></input>
      </div>
      <div className="input_wrap change_pw">
        <p>변경할 비밀번호: </p>
        <input type="password" required></input>
      </div>
      <div className="input_wrap change_pw_check">
        <p>비밀번호 확인: </p>
        <input type="password" required></input>
      </div>

      <div className="change_btn_wrap">
        <button className="change_btn">변경하기</button>
      </div>

    </div>
  );
}

export default ChangePassword;
