import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import Data from "./Data"



function Chronicles() {
  const id = useSelector(state => state.User.id);

  let a = [];
  let b;

  useEffect(() => {
    axios
      .get("https://humanmaker.ml/mypage/myTodoLists", {
        params: {
          id: id
        }
      })
      .then(data => {
        for (let i = 0; i < data.data.length; i++) {
          a.push(data.data[i]);
          console.log(a)
        }

        b = a.map((el) => (
          <Data key={el.id} goal={el.goal} />
        ))
        document.getElementsByClassName("abc")[0].textContent = b;

      }).catch(err => {
        console.log(err);
      })
  })

  return (
    <div className="abc">

    </div>
  )
}

export default Chronicles;