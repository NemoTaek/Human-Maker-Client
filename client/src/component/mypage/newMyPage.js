import React from "react"
import "./newMyPage.css"
import { Link } from "react-router-dom"



function myPage () {
   

  return (
    <div className="myPage">

      <div className="sideBar">
        <div className="sideBar_menu">
          <Link to="/myPage/passwordChange" >비밀번호변경</Link>
        </div>
        <div className="sideBar_menu">
          <Link to="/myPage/chronicles" >나의 연대기</Link>
        </div>
      </div>

      <div className="defaultMyPAge">
        <p className="default_string">오늘의 작은 변화가 인생에서 가장 큰 변화가 될 수 있습니다.</p>
        <p className="default_string">원하는 목표를 이루는 그날까지 힘내세요!!</p>  
      </div>

    </div>
  );
}

export default myPage;