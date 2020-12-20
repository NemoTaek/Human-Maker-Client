import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios"
import './Chronicles.css'
import cloud1 from "../../../img/cloud1.png"
import middleCloud from "../../../img/middlecloud.png"

function Chronicles() {

  const rememberId = useSelector(state => state.User.id);
  const [userData, setUserData] = useState([])

  useEffect(() => {
    axios.get('https://humanmaker.ml/mypage/myTodoLists', {
      params: {
        id: rememberId
      }
    }).then(res => {
      setUserData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  console.log(userData);
  return (

    <div className="chron_container" >

      <div className="middlecloud_wrap">
        <img className="middlecloud" src={middleCloud} alt="" />
      </div>

      <div className="chron_wrap">

        <div className="chron_name">
          <p>나의 연대기</p>
        </div>
        <div className="chron_box_container">

          {userData !== '완료된 todo 리스트가 없음' ? (
            <table className="chron_table">

              <thead>
                <tr>
                  <th>시작일</th>
                  <th>종료일</th>
                  <th>목표</th>
                  <th>달성률(%)</th>
                </tr>
              </thead>

              <tbody>
                {userData.map(data => (
                  <tr>
                    <td key={data.userId}>{data.startDate}</td>
                    <td key={data.userId}>{data.endDate}</td>
                    <td key={data.userId}>{data.goal}</td>
                    <td key={data.userId}>{data.progress}%</td>
                  </tr>
                ))}
              </tbody>

            </table>
          ) : (
              <div>
                <p>데이터가 없습니다.</p>
              </div>
            )}


        </div>
      </div>

      <div className="cloud1_wrap">
        <img className="cloud" src={cloud1} alt="" />
      </div>

    </div>
  );

}

export default Chronicles;