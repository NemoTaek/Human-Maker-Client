import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, rememberid } from "../../modules/login"
import "./Main.css"
import SignIn from "../signin/Signin";
import guest from "../../img/ssook.png"
import start from "../../img/garlic.png"
import bear from "../../img/bear.png"
import tiger from "../../img/tiger.png"
import danGoon from "../../img/dangoon.png"
import cloud1 from "../../img/cloud1.png"
import cloud2 from "../../img/middlecloud.png"
import cloud3 from "../../img/bigcloud.png"

function Main() {

  const loginRef = useRef();

  const isLogin = useSelector(state => state.login.isLogin)
  const rememberId = useSelector(state => state.User.id);
  const isRememberId = useSelector(state => state.login.isRememberId);
  const dispatch = useDispatch();
  const onLogin = useCallback(() => dispatch(login()), [dispatch])
  const onRememberId = useCallback(() => dispatch(rememberid()), [dispatch])

  const startBtn = () => {
    if (isLogin) {
      document.location.replace("/goal")
    }
    else {
      loginRef.current.loginOpen();
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }

  return (
    <div className="main_container">
      <div className="main_intro_container">
        <div className="main_string_wrap">
          <div className="main_name">
            <h2 className="main_name_main">Human Maker</h2>
            <p className="main_name_subName">다 함께 인간이 되어보자</p>
          </div>
          <div className="main_info_container">
            <div className="main_info_wrap">
              <p>계속되는 <strong>집콕!</strong> <strong>방콕!</strong></p>
              <p>게을러진 바로 당신을 위한 맟춤형 서비스!!</p>
              <p><strong>'단군신화'</strong>를 모티브로한 <strong>Human Maker</strong>를 통해서</p>
              <p>조금씩 변하는 나를 느껴보세요!</p>
              <p>인간이 되는 그날을 꿈꾸며...</p>
            </div>
          </div>
        </div>

        <div className="main_btn_wrap">
          <button className="guest_btn">
            <img className="main_btn_img" src={guest} alt=""></img>
            <div className="guest_start">
              <span>체험해보기</span>
            </div>
          </button>
          <button className="start_btn" onClick={startBtn}>
            <img className="main_btn_img" src={start} alt=""></img>
            <div className="guest_start">
              <span>시작하기</span>
            </div>
          </button>
          <SignIn rememberId={rememberId} onLogin={onLogin} isRememberId={isRememberId}
            onRememberId={onRememberId} ref={loginRef} />
        </div>

        <div className="main_img_container">
          <div className="main_img_wrap">
            <div className="danGoon_img"><img className="danGoon" src={danGoon} alt="" /></div>
            <div className="tiger_img"><img className="tiger" src={tiger} alt="" /></div>
            <div className="bear_img"><img className="bear" src={bear} alt="" /></div>
            <div className="cloud1_img"><img className="cloud1" src={cloud1} alt="" /></div>
            <div className="cloud2_img"><img className="cloud2" src={cloud2} alt="" /></div>
            <div className="cloud3_img"><img className="cloud3" src={cloud3} alt="" /></div>

          </div>
        </div>

      </div>

      <div className="maim_2">
        <div className="main_2_char">
          <img src={bear} alt=""></img>
        </div>

        <div className="maim_2_string">
          <p>
            우선 이루고자 하는 목표를 설정해보세요!
            </p>
        </div>
      </div>

      <div className="main_3">웹서비스 기능소개</div>

      <footer className="footer_container" >
        <div className="copyright">&copy;DanGoon</div>
      </footer>

    </div>
  );
}

export default Main;