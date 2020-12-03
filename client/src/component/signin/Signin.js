import React, { useState } from 'react';
import axios from 'axios'
import './Signin.css'
import { useDispatch } from 'react-redux';
import { userid, userpassword } from "../../modules/User";

function Signin({ rememberId, rememberPassword, onLogin }) {
	// const [isLogIn, setIsLogIn] = useState(false);
	const [isLogInMsg, setIsLogInMsg] = useState("");

	const [id, setId] = useState(rememberId);
	const [password, setPassword] = useState(rememberPassword);

	const userData = { id: id, password: password };

	const dispatch = useDispatch();
	const onId = () => dispatch(userid(rememberId));
	const onPassword = () => dispatch(userpassword(rememberPassword));

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

	const onClickSignInBtn = () => {
		axios
			.post("http://54.180.120.81:5000/signin", userData)
			.then(data => {
				if (data) {
					onId();
					onPassword();
					onLogin();
					document.location.replace("/");
				}
				else {
					setIsLogInMsg("등록되지 않은 아이디 또는 잘못 된 비밀번호 입니다.");
				}
			}).catch(err => {
				console.log(err);
			})
	}

	const onClickSignUpBtn = () => {
		document.location.replace("/signup");
	}

	return (
		<div>
			<div className="signInContainer">
				<h2>로그인</h2>
				<hr />
				<div className="idInputContainer">
					<label>아이디
						<input className="signInIdInput" type="text" defaultValue={rememberId} onChange={onChangeId} autoFocus required />
					</label>
				</div>

				<div className="pwInputContainer">
					<label>비밀번호
						<input className="signInPwInput" type="password" defaultValue={rememberPassword} onChange={onChangePw} onKeyPress={onKeyEnt} required />
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
	);
}

export default Signin;