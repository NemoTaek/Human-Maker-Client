import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from "react-dom"
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
          <div>{props.id}</div>
        </div>
      </div>, document.getElementById("modal_root")
    );
  }
  return null;

})

export default Plan;