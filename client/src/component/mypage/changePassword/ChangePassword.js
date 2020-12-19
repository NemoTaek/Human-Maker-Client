import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './ChangePassword.css';
import axios from 'axios'
import { userpassword } from "../../../modules/User"
import cloud1 from "../../../img/cloud1.png"
import middleCloud from "../../../img/middlecloud.png"

function ChangePassword() {
  const rememberId = useSelector(state => state.User.id);
  const rememberPw = useSelector(state => state.User.password);

  const [currentPw, setCurrentPw] = useState("");
  const [currentPwMsg, setCurrentPwMsg] = useState("error");

  const onChangeCurrentPw = e => {
    setCurrentPw(e.target.value);
  }
  useEffect(() => {
    if (!currentPw) {
      setCurrentPwMsg("error")
    }
    else if (currentPw === rememberPw) {
      setCurrentPwMsg("비밀번호가 일치합니다.");
    }
    else {
      setCurrentPwMsg("비밀번호를 다시 확인해주세요.");
    }
  }, [currentPw])

  const [password, setPassword] = useState("");
  const [pwCheckMsg, setPwCheckMsg] = useState("error");
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
      setPwCheckMsg("error");
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
  const [pwDoubleMsg, setPwDoubleMsg] = useState("error");
  const [pwDoubleCheck, setPwDoubleCheck] = useState(false);

  const onChangePwDoubleCk = e => {
    setPwDouble(e.target.value);
  }
  useEffect(() => {
    if (!password || !pwDouble) {
      setPwDoubleMsg("error");
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

  const dispatch = useDispatch();
  const onPassword = () => dispatch(userpassword(password));	// input에 있는 password를 store에 저장

  const changePassword = () => {
    const userData = { id: rememberId, password: password };

    if (pwCheck && pwDoubleCheck) {
      if (currentPw === rememberPw && password === pwDouble) {
        axios
          .put("https://humanmaker.ml/mypage/ChangeMyPassword", userData)
          .then(data => {
            if (data) {
              onPassword();

              alert("비밀번호 변경이 완료되었습니다.")
              // setCurrentPw("");
              // document.getElementsByClassName('change_pw_input')[0].value = "";
              // setCurrentPwMsg("error");

              // setPassword("");
              // document.getElementsByClassName('change_pw_input')[1].value = "";
              // setPwCheckMsg("error");

              // setPwDouble("");
              // document.getElementsByClassName('change_pw_input')[2].value = "";
              // setPwDoubleMsg("error");
              document.location.replace("/goal");
            }
          }).catch(err => {
            console.log(err);
          })
      }
      else {
        alert("아직 비밀번호를 변경하실 수 없습니다. 정보를 확인해주세요.")
      }
    }
    else {
      alert("아직 비밀번호를 변경하실 수 없습니다. 정보를 확인해주세요.")
    }
  }

  return (
    <div className="change_pw_container">
      
      <div className="middlecloud_wrap">
        <img className="middlecloud" src={middleCloud} alt="" />
      </div>

      <div className="change_pw_height">
        <div className="change_pw_wrap">

          <div className="change_name">
            <p>비밀번호 변경</p>
          </div>
          
          <div className="userId_value">
            <label>아이디: </label>
            <div className="id" >{rememberId}</div>
          </div>

          <div className="input_wrap">
            <label>현재 비밀번호: </label>
            <input className="change_pw_input" type="password" onChange={onChangeCurrentPw} required autoFocus></input>
            <p className={currentPwMsg === "error" ? "none_checkMsg" : (currentPwMsg === "비밀번호가 일치합니다." ? "successMsg": "falseMsg")} >{currentPwMsg}</p>
          </div>

          <div className="input_wrap">
            <label>새 비밀번호: </label>
            <input className="change_pw_input" type="password" onChange={onChangePw} required></input>
            <p className={pwCheckMsg === "error" ? "none_checkMsg" : (pwCheckMsg === "사용가능한 비밀번호 입니다." ? "successMsg": "falseMsg")}>{pwCheckMsg}</p>
          </div>

          <div className="input_wrap">
            <label>새 비밀번호 확인: </label>
            <input className="change_pw_input" type="password" onChange={onChangePwDoubleCk} required></input>
            <p className={pwDoubleMsg === "error" ? "none_checkMsg" : (pwDoubleMsg === "비밀번호가 일치합니다." ? "successMsg": "falseMsg")}>{pwDoubleMsg}</p>
          </div>

          <div className="change_btn_wrap">
            <button className="change_btn" onClick={changePassword}>변경하기</button>
          </div>
        </div>
      </div>
      
      <div className="cloud1_wrap">
        <img className="cloud" src={cloud1} alt="" />
      </div>
    </div>
  );
}

export default ChangePassword;
