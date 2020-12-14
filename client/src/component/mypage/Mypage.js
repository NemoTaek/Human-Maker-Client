import React from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Mypage.css';
import bear from "../../img/bear.png"
import ChangePassword from "./changePassword/ChangePassword"
import MyGoals from "./myGoals/MyGoals"
import MyCharacters from "./myCharacters/MyCharacters"

function Mypage() {
  const rememberId = useSelector(state => state.User.id);
  const rememberPw = useSelector(state => state.User.password);

  const viewChangePassword = () => {
    const viewComponent = (<ChangePassword id={rememberId} pw={rememberPw}></ChangePassword>);
    ReactDOM.render(viewComponent, document.getElementsByClassName("mypage_contents")[0]);
  }

  const viewMyGoals = () => {
    const viewComponent = (<MyGoals></MyGoals>);
    ReactDOM.render(viewComponent, document.getElementsByClassName("mypage_contents")[0]);
  }

  const viewMyCharacters = () => {
    const viewComponent = (<MyCharacters></MyCharacters>);
    ReactDOM.render(viewComponent, document.getElementsByClassName("mypage_contents")[0]);
  }

  return (
    <div className="mypage_wrap">
      <div className="me">
        <p>마이페이지</p>
        <img src={bear} alt=""></img>
      </div>

      <div className="mypage_contents_wrap">
        <div className="mypage_menu">
          <button className="change_pw_btn" onClick={viewChangePassword}>비밀번호 변경</button>
          <button className="my_goals_btn" onClick={viewMyGoals}>나의 연대기</button>
          <button className="my_characters_btn" onClick={viewMyCharacters}>진화의 역사</button>
        </div>

        <div className="mypage_contents">
          컨텐츠!
        </div>

      </div>
    </div>
  );
}

export default Mypage;
