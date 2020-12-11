import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from "react-dom"
import '../modal.css'
import './Plan.css'

const Plan = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      goalOpen: () => openGoal(),
      goalClick: () => closeGoal()
    }
  })
  const openGoal = () => {
    setDisplay(true)
  }
  const closeGoal = () => {
    setDisplay(false)
  }
  const clickBg = () => {
    setDisplay(false)
  }

  // useEffect(() => {
  //   if (display) {
  //     if (props.isRememberId) {
  //       document.getElementsByClassName("sign_in_idInput")[0].value = props.rememberId;
  //     }
  //   }
  // }, [display]);
  // useEffect(() => {
  //   if (display) {
  //     naverLogin();
  //   }
  // }, [display]);

  // const onChangeId = e => {
  //   setId(e.target.value);
  // }

  // const onKeyEnt = e => {
  //   if (e.key === "Enter") {
  //     onClickSignInBtn();
  //   }
  // }

  if (display) {
    return ReactDOM.createPortal(
      <div className="modalWrapper" >
        <div className="modalBg" onClick={clickBg} ></div>
        <div className="modalBox">

          <div className="input_plan_wrap">
            <div className="plan_title_wrap">
              <p className="plan_title">&lt; 오늘의 목표 &gt;</p>
              <input className="input_plan_title"></input>
            </div>

            <div className="plan_detail_wrap">
              <span className="plan_detail">세부 목표 1: </span>
              <input className="input_plan_detail"></input>
            </div>
            <div className="plan_detail_wrap">
              <span className="plan_detail">세부 목표 2: </span>
              <input className="input_plan_detail"></input>
            </div>
            <div className="plan_detail_wrap">
              <span className="plan_detail">세부 목표 3: </span>
              <input className="input_plan_detail"></input>
            </div>

            <button className="plan_btn" onClick={closeGoal}>목표 추가!</button>
          </div>

        </div>
      </div>, document.getElementById("modal_root")
    );
  }
  return null;

})

export default Plan;