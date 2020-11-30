import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Signup.css"

function Signup() {
    const [id , setId] = useState("");
    const [idCheckMsg, setIdCheckMsg] = useState(" ");
    const [idCheck, setIdCheck] = useState("false");

    const [password, setPassword] = useState("");
    const [pwCheckMsg, setPwCheckMsg] = useState(" ");
    const [pwCheck, setPwCheck] = useState("false");
 
    const [pwDouble, setPwDouble] = useState("");
    const [pwDoubleMsg, setPwDoubleMsg] = useState(" ");
    const [pwDoubleCheck, setPwDoubleCheck] = useState("false");

    const [sbuMessage, setSubMessage] = useState("");

    const idInput = useRef();
    const pwInput = useRef();

    const userData = {id : id , password: password }
    
    const onChangeId = e => {
        setId(e.target.value);

    }
    useEffect(() => {
        let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
        let test = spe.test(id)
        
        if(!id){
            setIdCheckMsg("")
        }
        else if(id.length < 4){
            setIdCheckMsg("아이디는 4글자 이상만 사용 가능합니다.");
        }
        else if(id.search(/\s/) !== -1){
            setIdCheckMsg("공백은 사용 할 수 없습니다.");
        }
        else if(test === true){ // 숫자도 특수문자로 검색된다....
            setIdCheckMsg("아이디에 특수문자는 사용 할 수 없습니다.");
        }
        else{
            setIdCheckMsg("아이디 중복확인이 필요합니다.")
        }

    },[id])

    const onClickDoubleBtn = () => {
        if(idCheck){
            axios
                .get("/signin/idDoubleCheck", {
                    params:{
                        id: id
                    }
                })
                .then(data => {
                    if(data){
                        setIdCheckMsg("이미 사용중인 아이디 입니다.");
                    }
                    setIdCheckMsg("사용 가능한 아이디 입니다.");
                    setIdCheck("true");
                }).catch(err => {
                    console.log(err);
                })
        }
        setIdCheckMsg("아이디를 다시 확인해 주세요.");
    }
    
    const onChangePw = e => {
        setPassword(e.target.value);
    }
    useEffect(() => {
        // let num = password.search(/[0-9]/g);
        // let eng = password.search(/[a-z]/ig);
        let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
        let test = spe.test(password)

        if(!password){
            setPwCheckMsg("")
        }
        else if(password.length < 8){
            setPwCheckMsg("비밀번호는 8자리 이상만 가능합니다.");;
            
        }
        else if(password.search(/\s/) !== -1){
            setPwCheckMsg("공백없이 입력해 주세요.");
            
        }
        else if(test === false){ // 작동 안하는듯..
            setPwCheckMsg("영문, 숫자, 특수문자를 조합해서 입력해주세요.");
            
        }
        else{
            setPwCheckMsg("사용가능한 비밀번호 입니다.");
            setPwCheck("true");
        }
    },[password])
        

    const onChangePwDoubleCk = e => {
        setPwDouble(e.target.value);
    }
    useEffect(() =>{
        if(!password || !pwDouble){
            setPwDoubleMsg("")
        }
        else if(pwDouble === password){
            setPwDoubleMsg("비밀번호가 일치합니다.");
            setPwDoubleCheck("true");
        }
        else{
            setPwDoubleMsg("비밀번호가 일치하지 않습니다.");
        }
    
    },[password,pwDouble])
        
    
    const onClickSignUpBtn = () => {
        if(idCheck && pwCheck && pwDoubleCheck){
            axios
                .post("/signup", userData)
                .then(() => {
                    alert("가입 되었습니다. 로그인 후 사용 가능합니다.");
                    document.history.replace("/");
                    //document.history.push
                    //document.location.href
                    //document.location.replace
                }).catch(err=>{
                    console.log(err);
                })
        }
        if(!idCheck){
            setSubMessage("아이디를 확인해 주세요.");
            idInput.focus();
            return
        }
        if(!pwCheck){
            setSubMessage("비밀번호를 확인해 주세요.");
            pwInput.focus();
            return
        }
        if(!pwDoubleCheck){
            setSubMessage("비밀번호가 일치하지 않습니다.");
            return
        }
    }

    //아이디 한글입력 방지, 비밀번호 영문 우선 설정
    return (
        <div>
            <div className="sign_up_container">
                <h2 className="sign_up_name " >회원가입</h2>
                <hr/>
                <div className ="idInput_container">
                    <label>아이디 
                        <input className="sign_up_idInput" type="text" onChange={onChangeId} autoFocus required />
                    </label>
                    <button className="idCheck_btn" onClick={onClickDoubleBtn}>중복확인</button>
                    <p className="idCheckMsg">{idCheckMsg}</p>
                </div>
                <div className ="pwInput_container">
                    <label>비밀번호 
                        <input className="sign_up_pwInput" type="password" onChange={onChangePw} required />
                    </label>
                    <p className="pwCheckMsg">{pwCheckMsg}</p>
                </div>
                <div className ="pwCheckInput_container">
                    <label>비밀번호 확인
                        <input className="sign_up_pwCheckInput" type="password" onChange={onChangePwDoubleCk} required />
                    </label>
                    <p className="pwDoubleMsg">{pwDoubleMsg}</p>
                </div>
                <button className="sign_up_btn" onClick={onClickSignUpBtn}>가입신청</button>
                <p className="sbuMessage">{sbuMessage}</p>
            </div>
            <div className="oauthImg">
                {/* <img className onClick={} ></img>
                <img className onClick={} ></img>
                <img className onClick={} ></img> */}
            </div>
        </div>
    );
}

export default Signup;