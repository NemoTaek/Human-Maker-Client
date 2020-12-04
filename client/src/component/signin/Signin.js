import React, { useState } from 'react';
import axios from 'axios'
import './Signin.css'
import { useDispatch } from 'react-redux';
import { userid, userpassword } from "../../modules/User";
import { GoogleLogin } from 'react-google-login';

// https://electricburglar.tistory.com/150
// https://velog.io/@claire-euni/React-hook-Social-Login-Kakaotalk-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%97%86%EC%9D%B4-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// https://velog.io/@junghyunhao/kakao-login-react
// 구글 OAuth 클라이언트 ID
const googleAPI = "";

function Signin({ rememberId, onLogin, isRememberId }) {
	const [isLogInMsg, setIsLogInMsg] = useState("");

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const [checkRememberId, setCheckRememberId] = useState(isRememberId);

	const dispatch = useDispatch();
	const onId = () => dispatch(userid(id));	// input에 있는 id를 store에 저장
	const onPassword = () => dispatch(userpassword(password));	// input에 있는 password를 store에 저장

	const onChangeId = e => {
		setId(e.target.value);
	}
	const onChangePw = e => {
		setPassword(e.target.value);
	}

	const onKeyEnt = e => {
		if (e.key === "Enter") {
			onClickSignInBtn();
		}
	}

	const onCheckboxChangeHandler = (e) => {
		// setCheckRememberId(!checkRememberId);
		setCheckRememberId(e.target.check);
		console.log(e.target.check);
		// 아이디 기억하기가 체크되어있으면
		if (e.target.checked) {
			// input값에 store에 저장되어있는 id 출력
			document.getElementsByClassName("sign_in_idInput")[0].value = rememberId;
		}
	};

	const onClickSignInBtn = () => {
		const userData = { id: id, password: password };
		axios
			.post("http://54.180.120.81:5000/signin", userData)
			.then(data => {
				if (data) {
					onId();	// input에 있는 id를 store에 저장
					onPassword();	// input에 있는 password를 store에 저장
					onLogin();	// isLogin을 true로 변환
					document.location.replace("/");
				}
				else {
					setIsLogInMsg("등록되지 않은 아이디 또는 잘못 된 비밀번호 입니다.");
				}
			}).catch(err => {
				console.log(err);
			})

		if (!id) {
			setIsLogInMsg("아이디를 입력해주세요.");
		}
		if (id && !password) {
			setIsLogInMsg("비밀번호를 입력해주세요.");
		}
		else {
			setIsLogInMsg("");
		}
	}

	const onClickSignUpBtn = () => {
		document.location.replace("/signup");
	}

	const responseGoogle = (res) => {
		console.log(res);
		setId(res.profileObj.name);	// 구글아이디로 로그인하면 그 id 값을 state에 설정
		onId();	// 위에서 id값을 googleId로 했으므로 onId로 이 id를 store에 저장
	}

	const responseFail = (err) => {
		console.log(err);
	}

	return (
		<div className="sign_in_wrap">
			<div className="sign_in_container">
				<p className="sign_in_name" >로그인</p>

				<div className="input_container_wrap">
					<div className="input_container">
						<span>아이디</span>
						<input className="sign_in_idInput" type="text" onChange={onChangeId} autoFocus required />
					</div>

					<div className="input_container">
						<span>비밀번호</span>
						<input className="sign_in_pwInput" type="password" onChange={onChangePw} onKeyPress={onKeyEnt} required />
					</div>
				</div>

				<label className="remember_id">
					<input type="checkbox" checked={checkRememberId} onChange={e => onCheckboxChangeHandler(e)} />아이디 기억하기
				</label>

				<div className="login_message">
					<p>{isLogInMsg}</p>
				</div>

				<button className="sign_in_btn" onClick={onClickSignInBtn}  >로그인</button>

				<button className="sign_up_btn" onClick={onClickSignUpBtn} >간편 회원가입</button>

				<GoogleLogin clientId={googleAPI} buttonText="Google" onSuccess={responseGoogle} onFailure={responseFail} />

			</div>
		</div>
	);
}

export default Signin;