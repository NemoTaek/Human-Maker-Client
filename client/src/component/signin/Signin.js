import React, { useState, forwardRef, useImperativeHandle} from 'react';
// import {useSelector} from 'react-redux'
import ReactDOM from "react-dom"
import axios from 'axios'
import './Signin.css'

const Signin = forwardRef((props, ref) => {

    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            loginOpen : () => openLogin(),
            loginClick: () => closeLogin()
        }
    })
    const openLogin = () => {
        setDisplay(true)
    }
    const closeLogin = () => {
        setDisplay(false)
    }
    const clickBg = () => {
        setDisplay(false)
    }


    // const isLogin = useSelector(state => state.login.isLogin);
    const [isLogInMsg, setIsLogInMsg] =useState("");
   

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const userData = {id : id , password : password};

    const onChangeId = e => {
        setId(e.target.value);
    }
    const onChangePw = e => {
        setPassword(e.target.value);
    }

    const onKeyEnt = e => {
        if(e.key === "Enter"){
            onClickSignInBtn();
        }
    }

    const onClickSignInBtn = () =>{
        axios
            .post("http://54.180.120.81:5000/signin", userData, 
            // {
            //     withCredentials: true,
            //     crossDomain: true,
            //     credentials: "include"
            // }
            )
            .then(res => {
                // console.log(res)
                if(res.status === 200){
                    props.onLogin();
                    closeLogin();
                    document.location.replace("/user");
                }
                else{
                    setIsLogInMsg("등록되지 않은 아이디 또는 잘못 된 비밀번호 입니다.");
                }
                cookieSaveToken(res);
            })
            .catch(err => {
                console.log(err);
            })        
    }
    const cookieSaveToken = res => {
        console.log(res)
        const accessToken = res.data;

        if (document.cookie === "") {
            document.cookie = `sid=${accessToken.token}`;
        } 
        else {
            const compareToken = document.cookie.split("=");
            if (accessToken.token !== compareToken[1]) {
                document.cookie = `sid=${accessToken.token}`;
                // console.log("로그인후토큰", accessToken.token);
                // console.log("쿠키저장토큰", compareToken[1]);
            } 
            else {
                // console.log("로그인후토큰", accessToken.token);
                // console.log("쿠키저장토큰", compareToken[1]);
                console.log("토큰 값이 동일하여 갱신하지 않습니다.");
            }
        }
        axios.defaults.headers.common[ "Authorization" ] = `Bearer ${accessToken.token}`;
    }
   
    const onClickSignUpBtn = () => {
        document.location.replace("/signup");
    }


    if(display){
        return ReactDOM.createPortal(
            <div className="modalWrapper" >
                <div className="modalBg" onClick={clickBg} ></div>
                <div className="modalBox">
                    <div className="signInContainer">
                        <h2>로그인</h2>
                        <hr/>
                        <div className ="idInputContainer">
                            <label>아이디 
                                <input className="signInIdInput" type="text" onChange={onChangeId} autoFocus required />
                            </label>
                        </div>
                        
                        <div className ="pwInputContainer">
                            <label>비밀번호 
                                <input className="signInPwInput" type="password" onChange={onChangePw} onKeyPress={onKeyEnt} required />
                            </label>
                        </div>
                        
                        <div>
                            <p className="isLogInMsg">{isLogInMsg}</p>
                        </div>
        
                        <div>
                        <button className="signInBtn" onClick={onClickSignInBtn}  >로그인</button>
                        </div>
        
                        <div>
                        <button className="signUpBtn" onClick={onClickSignUpBtn} >간편 회원가입</button>
                        </div>
        
                    </div>
                </div>                
            </div>,document.getElementById("modal_root")
        );
    }
    return null;
    
})

export default Signin;

                