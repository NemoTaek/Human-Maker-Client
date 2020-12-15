import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from "react-dom"
import '../../modal.css'
import './Plan.css'
import { makeGoal, makePlan } from "../../../modules/plan"

const Plan = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false);
  const id = useSelector(state => state.User.id);

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

  const [goal, setGoal] = useState('');
  const [plan1, setPlan1] = useState('');
  const [plan2, setPlan2] = useState('');
  const [plan3, setPlan3] = useState('');

  const enterPlan = () => {
    // axios
    //   .post("http://54.180.120.81:5000/goalSetup", {
    //     goal: goal,
    //     subgoal1: plan1,
    //     subgoal2: plan2,
    //     subgoal3: plan3,
    //     userId: id
    //   })
    //   .then(data => {
    //     if (data) {
    //       console.log(data);
    //     }
    //   }).catch(err => {
    //     console.log(err);
    //   })
    closeGoal();
  }

  const onChangeGoal = e => {
    setGoal(e.target.value);
  }

  const onChangePlan1 = e => {
    setPlan1(e.target.value);
  }
  const onChangePlan2 = e => {
    setPlan2(e.target.value);
  }
  const onChangePlan3 = e => {
    setPlan3(e.target.value);
  }

  if (display) {
    return ReactDOM.createPortal(
      <div className="modalWrapper" >
        <div className="modalBg" onClick={clickBg} ></div>
        <div className="modalBox">

          <div className="input_plan_wrap">
            <div className="plan_title_wrap">
              <p className="plan_title">&lt; 오늘의 목표 &gt;</p>
              <input className="input_plan_title" onChange={onChangeGoal}></input>
            </div>

            <div className="plan_detail_wrap">
              <span className="plan_detail">세부 목표 1: </span>
              <input className="input_plan_detail" onChange={onChangePlan1}></input>
            </div>
            <div className="plan_detail_wrap">
              <span className="plan_detail">세부 목표 2: </span>
              <input className="input_plan_detail" onChange={onChangePlan2}></input>
            </div>
            <div className="plan_detail_wrap">
              <span className="plan_detail">세부 목표 3: </span>
              <input className="input_plan_detail" onChange={onChangePlan3}></input>
            </div>

            <button className="plan_btn" onClick={enterPlan}>목표 추가!</button>
          </div>

        </div>
      </div>, document.getElementById("modal_root")
    );
  }
  return null;

})

export default Plan;