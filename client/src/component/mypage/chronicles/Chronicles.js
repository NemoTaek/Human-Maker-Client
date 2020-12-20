import React ,{ useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios"
import './Chronicles.css'

function Chronicles() {

  const rememberId = useSelector(state => state.User.id);  
  const [userData, setUserData] = useState("")
  const [order, setOrder] = useState(1)

  useEffect(() => {
    axios.get('https://humanmaker.ml/mypage/myTodoLists', {
      params: {
        id : rememberId
      }
    }).then(res => {
      setUserData(res.data)
    }).catch(err=> {
      console.log(err)
    })
  },[])

  console.log(userData) 

  if(userData){ 
    console.log(userData)  
    return (   
      userData.map(data => (
      <div>
        <div className="chron_name">
          <p>나의 연대기</p>
        </div>
          <div className="chron_container">
            <table className="chron_table">
              <thead>
                <tr>
                  <th>시작일</th>
                  <th>종료일</th>
                  <th>목표</th>              
                  <th>달성률</th>
                </tr>
              </thead>
              <tbody>
                <tr>                
                  <td key={data.userId}>{data.startDate}</td>
                  <td key={data.userId}>{data.endDate}</td>
                  <td key={data.userId}>{data.goal}</td>             
                  <td key={data.userId}>{data.progress}%</td>
                </tr>
              </tbody>
            </table>
          </div>    
      </div>
      ))  
    );
   
  }
  return (
    <div>
      <p>데이터가 없습니다.</p>
    </div>
  )
      
}

export default Chronicles;