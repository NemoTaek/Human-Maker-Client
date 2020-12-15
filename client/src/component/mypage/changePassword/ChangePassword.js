import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import './ChangePassword.css';
import axios from 'axios'
import { userpassword } from "../../../modules/User"

function ChangePassword(props) {

  const [currentPw, setCurrentPw] = useState("");
  const [currentPwMsg, setCurrentPwMsg] = useState("");
  const onChangeCurrentPw = e => {
    setCurrentPw(e.target.value);
  }
  useEffect(() => {
    // let num = password.search(/[0-9]/g);
    // let eng = password.search(/[a-z]/ig);
    let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
    let test = spe.test(password)

    if (!currentPw) {
      setCurrentPwMsg("")
    }
    else if (currentPw === props.pw) {
      setCurrentPwMsg("현재 비밀번호와 일치합니다.");
    }
    else {
      setCurrentPwMsg("현재 비밀번호와 일치하지 않습니다.");
    }
  }, [currentPw])

  const [password, setPassword] = useState("");
  const [pwCheckMsg, setPwCheckMsg] = useState("");
  const [pwCheck, setPwCheck] = useState(false);
  const onChangePw = e => {
    setPassword(e.target.value);
  }
  useEffect(() => {
    // let num = password.search(/[0-9]/g);
    // let eng = password.search(/[a-z]/ig);
    let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
    let test = spe.test(password)

    if (!password) {
      setPwCheckMsg("");
      setPwCheck(false);
    }
    else if (password.length < 8) {
      setPwCheckMsg("비밀번호는 8자리 이상만 가능합니다.");
      setPwCheck(false);
    }
    else if (password.search(/\s/) !== -1) {
      setPwCheckMsg("공백없이 입력해 주세요.");
      setPwCheck(false);
    }
    else if (test === false) { // 작동 안하는듯..
      setPwCheckMsg("영문, 숫자, 특수문자를 조합해서 입력해주세요.");
      setPwCheck(false);
    }
    else {
      setPwCheckMsg("사용가능한 비밀번호 입니다.");
      setPwCheck(true);
    }
  }, [password])

  const [pwDouble, setPwDouble] = useState("");
  const [pwDoubleMsg, setPwDoubleMsg] = useState(" ");
  const [pwDoubleCheck, setPwDoubleCheck] = useState(false);
  const onChangePwDoubleCk = e => {
    setPwDouble(e.target.value);
  }
  useEffect(() => {
    if (!password || !pwDouble) {
      setPwDoubleMsg("");
      setPwDoubleCheck(false);
    }
    else if (pwDouble === password) {
      setPwDoubleMsg("비밀번호가 일치합니다.");
      setPwDoubleCheck(true);
    }
    else {
      setPwDoubleMsg("비밀번호가 일치하지 않습니다.");
      setPwDoubleCheck(false);
    }

  }, [password, pwDouble])


  useEffect(() => {
    console.log(document.getElementsByClassName("change_btn")[0].disabled);
    if (pwCheck && pwDoubleCheck) {
      if (currentPw === props.pw && password === pwDouble) {
        document.getElementsByClassName("change_btn")[0].disabled = false;
      }
      else {
        document.getElementsByClassName("change_btn")[0].disabled = true;
      }
    }
  }, [currentPw, password, pwDouble, pwCheck, pwDoubleCheck])

  const dispatch = useDispatch();
  const onPassword = () => dispatch(userpassword(password));	// input에 있는 password를 store에 저장

  const changePassword = () => {
    const userData = { id: props.id, password: password };
    console.log('a');
    axios
      .put("https://humanmaker.ml/mypage/ChangeMyPassword", userData)
      .then(data => {
        if (data) {
          onPassword();
          alert("비밀번호 변경이 완료되었습니다.")
        }
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="change_pw_wrap">

      <div className="input_wrap">
        <span>아이디: </span>
        <input className="id" type="text" defaultValue={props.id} autoFocus required readOnly></input>
      </div>
      <div className="input_wrap">
        <span>현재 비밀번호: </span>
        <input className="current_pw" type="password" onChange={onChangeCurrentPw} required></input>
        <p className="checkMsg">{currentPwMsg}</p>
      </div>
      <div className="input_wrap">
        <span>변경할 비밀번호: </span>
        <input className="change_pw" type="password" onChange={onChangePw} required></input>
        <p className="checkMsg">{pwCheckMsg}</p>
      </div>
      <div className="input_wrap">
        <span>비밀번호 확인: </span>
        <input className="change_pw_check" type="password" onChange={onChangePwDoubleCk} required></input>
        <p className="checkMsg">{pwDoubleMsg}</p>
      </div>

      <div className="change_btn_wrap">
        <button className="change_btn" onClick={changePassword} disabled>변경하기</button>
      </div>

    </div>
  );
}

export default ChangePassword;
