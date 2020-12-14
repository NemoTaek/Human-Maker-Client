import React, { useState } from "react";
import './ChangePassword.css';
import axios from 'axios'

function ChangePassword(props) {
  console.log(props.pw);

  const [password, setPassword] = useState("");
  const onChangePw = e => {
    setPassword(e.target.value);
  }

  const checkPassword = () => {
    let currentPassword = document.getElementsByClassName("current_pw")[0].value;
    let changePassword = document.getElementsByClassName("change_pw")[0].value;
    let changePasswordCheck = document.getElementsByClassName("change_pw_check")[0].value;

    if (changePassword && changePasswordCheck) {
      if (currentPassword === props.pw && changePassword === changePasswordCheck) {
        document.getElementsByClassName("change_btn")[0].disabled = false;
      }
      else {
        document.getElementsByClassName("change_btn")[0].disabled = true;
      }
    }
  }

  const changePassword = () => {
    const userData = { id: props.id, password: password };
    axios
      .post("http://54.180.120.81:5000/", userData)
      .then(data => {
        if (data) {
          alert("비밀번호 변경이 완료되었습니다.")
        }
      }).catch(err => {
        console.log(err);
      })

  }

  return (
    <div className="change_pw_wrap">

      <div className="input_wrap">
        <p>아이디: </p>
        <input className="id" type="text" defaultValue={props.id} autoFocus required readOnly></input>
      </div>
      <div className="input_wrap">
        <p>현재 비밀번호: </p>
        <input className="current_pw" type="password" onChange={checkPassword} required></input>
      </div>
      <div className="input_wrap">
        <p>변경할 비밀번호: </p>
        <input className="change_pw" type="password" onChange={(e) => { checkPassword(); onChangePw(e); }} required></input>
      </div>
      <div className="input_wrap">
        <p>비밀번호 확인: </p>
        <input className="change_pw_check" type="password" onChange={checkPassword} required></input>
      </div>

      <div className="change_btn_wrap">
        <button className="change_btn" disabled>변경하기</button>
      </div>

    </div>
  );
}

export default ChangePassword;
