import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import '../signin/Signin'

function Nav(props) {
  const [isLogin, setIsLogin] = useState(props.isLogIn)
  console.log(props)

  const [isModalOpen, setIsModalOpen] = useState("false");
  const [isModalClose, setIsModalClose] = useState("true")

  const onClickLogout = () => {
    setIsModalOpen("true")
    if(setIsModalClose===false){
      setIsLogin("false")
    }
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Human Maker</NavLink>
          </li>
          {isLogin ? (
              <>
                <li onClick={onClickLogout} isModalOpen={isModalOpen} isModalClose={isModalClose}>
                  <NavLink to="/logout" activeClassName="navLogout" >
                   로그아웃
                  </NavLink>
                </li>
               </>
            ) : (
             <>
               <li>
                 <NavLink to="/login" activeClassName="navLogin">
                   로그인
                 </NavLink>
               </li>
             </>
            )}
            {isLogin ? (
              <>
                <li>
                  <NavLink to="/mypage" activeClassName="navMyPage" >
                   마이페이지
                  </NavLink>
                </li>
               </>
            ) : (
             <>
               <li>
                 <NavLink to="/signup" activeClassName="navSignup">
                   회원가입
                 </NavLink>
               </li>
             </>
            )}

        
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

{/* <li>
<NavLink to="/signup">회원가입</NavLink>
</li>
<li>
<NavLink to="/logout">로그아웃</NavLink>
</li> */}