import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import './Goal.css';
import Plan from './plan/Plan'
import calendar from "../../img/calendar7.png"


function Goal() {

  // const viewGoal = useSelector(state => state.plan.goalTitle);
  // const viewPlan = useSelector(state => state.plan.planContents);
  let goal = "";
  let subgoal1 = "";
  let subgoal2 = "";
  let subgoal3 = "";

  const id = useSelector(state => state.User.id);
  useEffect(() => {
    axios
      .get("http://localhost:5000/goal", {
        params: {
          id: id
        }
      })
      .then(data => {
        if (data) {
          console.log(data);

          // 목표 및 세부 목표 출력
          goal = data.data.goal;
          subgoal1 = data.data.subgoal1;
          subgoal2 = data.data.subgoal2;
          subgoal3 = data.data.subgoal3;

          document.getElementsByClassName("view_plan_title")[0].textContent = goal;

          let node1 = document.createElement("span")
          let node2 = document.createElement("span")
          let node3 = document.createElement("span")

          let textSubgoal1 = document.createTextNode(subgoal1);
          let textSubgoal2 = document.createTextNode(subgoal2);
          let textSubgoal3 = document.createTextNode(subgoal3);

          node1.appendChild(textSubgoal1);
          node2.appendChild(textSubgoal2);
          node3.appendChild(textSubgoal3);

          document.getElementsByClassName("plan_detail")[0].appendChild(node1);
          document.getElementsByClassName("plan_detail")[1].appendChild(node2);
          document.getElementsByClassName("plan_detail")[2].appendChild(node3);

          if (data.status !== 201) {
            document.getElementsByClassName("goal_btn")[0].style.display = "none";
            document.getElementsByClassName("view_plan_wrap")[0].style.display = "block";

            for (let i = 0; i < data.data.Stickers.length; i++) {
              let imgNode = document.createElement("img")
              imgNode.src = "../" + data.data.Stickers[i].sticker;
              document.getElementsByClassName("sticker")[i].appendChild(imgNode);
            }
          }
          else if (data.status === 201) {
            document.getElementsByClassName("goal_btn")[0].style.display = "block";
            document.getElementsByClassName("view_plan_wrap")[0].style.display = "none";
          }
        }
      }).catch(err => {
        console.log(err);
      })
  })

  const goalRef = useRef();
  const goalOpenModal = () => {
    goalRef.current.goalOpen();
  }

  let input = document.getElementsByClassName("plan_detail");
  let count = 0;
  let completed = 0;
  const completedGoal = (e) => {
    if (e.target.checked) {
      count++;
      completed += (1 / input.length) * 100;
      completed = Math.round(completed);
      if (completed === 99) {
        completed = 100;
      }
      document.getElementsByClassName("completed_rate")[0].textContent = "달성률: " + completed + "%";
    }
    else {
      count--;
      if (completed === 100) {
        completed = 99;
      }
      completed -= (1 / input.length) * 100;
      completed = Math.round(completed);
      document.getElementsByClassName("completed_rate")[0].textContent = "달성률: " + completed + "%";
    }
  }

  const completedBtn = () => {
    if (count === input.length) {
      // document.getElementsByClassName("completed_btn")[0].disabled = false;
      axios
        .post("http://localhost:5000/goal", {
          id: id
        })
        .then(data => {
          if (data) {
            console.log(data);
            alert("스티커 등록이 완료되었습니다.")
            window.location.reload();
          }
          else {
            alert("새 목표를 만들어야 합니다.");
          }
        }).catch(err => {
          console.log(err);
        })
    }
    else {
      alert("아직 목표를 달성하지 못하였습니다. 목표를 달성하고 클릭해주세요.")
    }
  }

  return (
    <div className="goal">
      <div className="calendar_wrap">
        <img src={calendar} alt=""></img>
        <table className="calendar" frame="void">
          <tbody>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
            <tr>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
              <td className="sticker"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="goal_wrap">
        <button className="goal_btn" onClick={goalOpenModal} >목표 설정하기</button>
        <Plan ref={goalRef}></Plan>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <div className="view_plan_wrap">
          <div className="view_plan_title_wrap">
            <p className="plan_title">&lt; 오늘의 목표 &gt;</p>
            <p className="view_plan_title"></p>
          </div>

          <div className="plan_detail_wrap">
            <label className="plan_detail">
              <input type="checkbox" className="goal_check" onChange={e => completedGoal(e)} />
            </label>
            <label className="plan_detail">
              <input type="checkbox" className="goal_check" onChange={e => completedGoal(e)} />
            </label>
            <label className="plan_detail">
              <input type="checkbox" className="goal_check" onChange={e => completedGoal(e)} />
            </label>
          </div>

          <div className="completed_wrap">
            <button className="completed_btn" onClick={completedBtn}>달성했다!</button>
            <span className="completed_rate">달성률: 0%</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Goal;
