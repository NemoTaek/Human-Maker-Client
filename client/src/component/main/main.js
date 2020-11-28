import React, { useState } from "react";
import "./main.css"
import guest from "../../img/ssook.png"
import start from "../../img/garlic.png"

function Main() {
  return (
    <div className="wrap">
      <div className="main1">
        <p>
          코로나로 인해 집콕! 방콕!을 하면서 늦게 자고 늦게 일어나지 않으신가요!?
          습관을 바로 잡고 코로나 창궐을 기회로 만들 서비스를 소개합니다!
          우리의 설화 '단군신화'를 모티브로한 달성앱! People Maker를 통해
          작은 습관을 만들어보세요!
          하루에 한번 씻기! 자격증 문제집 풀기와 같은 작은 목표를 100일간 이루면서
          사람이 되어봅시다아ㅏㅏㅏㅏ!!!!
        </p>
        <div className="btn_wrap">
          <button className="guest_btn">
            <img src={guest}></img>
            <div>
              <span>체험해보기</span>
            </div>
          </button>
          <button className="start_btn">
            <img src={start}></img>
            <div>
              <span>시작하기</span>
            </div>
          </button>
        </div>
      </div>

      <div className="main2">
        <p>
          코로나로 인해 집콕! 방콕!을 하면서 늦게 자고 늦게 일어나지 않으신가요!?
          습관을 바로 잡고 코로나 창궐을 기회로 만들 서비스를 소개합니다!
          우리의 설화 '단군신화'를 모티브로한 달성앱! People Maker를 통해
          작은 습관을 만들어보세요!
          하루에 한번 씻기! 자격증 문제집 풀기와 같은 작은 목표를 100일간 이루면서
          사람이 되어봅시다아ㅏㅏㅏㅏ!!!!
        </p>
      </div>
    </div>
  );
}

export default Main;