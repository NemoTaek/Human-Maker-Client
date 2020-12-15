import React from "react";
import './MyGoals.css';
import calendar from "../../../img/calendar.png"

function MyGoals() {

  // const id = useSelector(state => state.User.id);
  // useEffect(() => {
  //   axios
  //     .post("http://54.180.120.81:5000/myTodoLists", {
  //       params: {
  //         userId: id
  //       }
  //     })
  //     .then(data => {
  //       if (data) {
  //         console.log(data);
  //       }
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // })

  return (
    <div className="my_goals_wrap">

      <div className="my_goal">
        <div className="my_calendar">
          <img src={calendar} alt=""></img>
        </div>
        <div className="goal_title">
          <p>DB에 있는 목표를 가져와서 출력될 것이다</p>
        </div>
      </div>

      <div className="my_goal">
        <div className="my_calendar">
          <img src={calendar} alt=""></img>
        </div>
        <div className="goal_title">
          <p>DB에 있는 목표를 가져와서 출력될 것이다</p>
        </div>
      </div>

      <div className="my_goal">
        <div className="my_calendar">
          <img src={calendar} alt=""></img>
        </div>
        <div className="goal_title">
          <p>DB에 있는 목표를 가져와서 출력될 것이다</p>
        </div>
      </div>

    </div>
  );
}

export default MyGoals;
