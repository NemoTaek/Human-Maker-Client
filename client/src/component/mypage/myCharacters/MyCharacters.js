import React from "react";
import './MyCharacters.css';
import bear from "../../../img/bear.png"
import tiger from "../../../img/tiger.png"
import dangoon from "../../../img/dangoon.png"

function MyCharacters() {
  return (
    <div className="my_characters_wrap">

      <div className="my_character">
        <div className="my_calendar">
          <img src={bear} alt=""></img>
        </div>
        <div className="character_title">
          <p>DB에 있는 목표를 가져와서 출력될 것이다</p>
          <p className="rate">달성률: 0%</p>
        </div>
      </div>

      <div className="my_character">
        <div className="my_calendar">
          <img src={tiger} alt=""></img>
        </div>
        <div className="character_title">
          <p>DB에 있는 목표를 가져와서 출력될 것이다</p>
          <p className="rate">낙오</p>
        </div>
      </div>

      <div className="my_character">
        <div className="my_calendar">
          <img src={dangoon} alt=""></img>
        </div>
        <div className="character_title">
          <p>DB에 있는 목표를 가져와서 출력될 것이다</p>
          <p className="rate">달성률: 100%</p>
        </div>
      </div>

    </div>
  );
}

export default MyCharacters;
