import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from "react-dom"
import axios from 'axios'
import './Signin.css'
import Signup from "../signup/Signup";
import { useDispatch } from 'react-redux';
import { userid, userpassword } from "../../modules/User";
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

const Signin = forwardRef((props, ref) => {

	const signupRef = useRef();

	const googleAPI = "";
	const kakaoAPI = "";
	// const naverAPI = "";

	const [display, setDisplay] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			loginOpen: () => openLogin(),
			loginClose: () => closeLogin()
		}
	})


	const signupOpenModal = () => {
		signupRef.current.signupOpen();
  }


	const openLogin = () => {
		setDisplay(true)
	}
	const closeLogin = () => {
		setDisplay(false)
	}
	const clickBg = () => {
		setDisplay(false)
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
	}

	useEffect(() => {
		if (display) {
			if (props.isRememberId) {
				document.getElementsByClassName("sign_in_idInput")[0].value = props.rememberId;
			}
		}
	}, []);

	// const isLogin = useSelector(state => state.login.isLogin);
	const [isLogInMsg, setIsLogInMsg] = useState("");

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const [checkRememberId, setCheckRememberId] = useState(props.isRememberId);

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
		setCheckRememberId(!checkRememberId);

		// 아이디 기억하기가 체크되어있으면
		if (e.target.checked) {
			// input값에 store에 저장되어있는 id 출력
			props.onRememberId();
		}
		else {
			props.onForgotId();
		}
	};

	const onClickSignInBtn = () => {
		const userData = { id: id, password: password };
		// axios
		// 	.post("http://54.180.120.81:5000/signin", userData)
		// 	.then(data => {
		// 		if (data) {
		// 			onId();	// input에 있는 id를 store에 저장
		// 			onPassword();	// input에 있는 password를 store에 저장
		// 			onLogin();	// isLogin을 true로 변환
		// 			document.location.replace("/user");
		// 		}
		// 		else {
		// 			setIsLogInMsg("등록되지 않은 아이디 또는 잘못 된 비밀번호 입니다.");
		// 		}
		// 	}).catch(err => {
		// 		console.log(err);
		// 	})

		if (!id) {
			setIsLogInMsg("아이디를 입력해주세요.");
		}
		if (id && !password) {
			setIsLogInMsg("비밀번호를 입력해주세요.");
		}
		else {
			setIsLogInMsg("");
		}

		onId();
		onPassword();
		props.onLogin();
		closeLogin();
	}

	const responseGoogle = (res) => {
		console.log(res);
		setId(res.profileObj.name);	// 구글아이디로 로그인하면 그 id 값을 state에 설정
		// onId();	// 위에서 id값을 googleId로 했으므로 onId로 이 id를 store에 저장
	}

	const responseKakao = (res) => {
		// console.log(res);
		// setId(res.profile.id);	// 구글아이디로 로그인하면 그 id 값을 state에 설정
		// onId();	// 위에서 id값을 googleId로 했으므로 onId로 이 id를 store에 저장

		window.Kakao.API.request({
			url: '/v2/user/me',
			success: async res => {
				console.log("getme : ", res);
				console.log("getme : ", res.kakao_account);
				// const account = res.Kakao_account;
			},
			fail: error => {
				console.log("error : ", error);
			}
		})
		console.log(res)
		console.log("success")
	}

	// const responseNaver = new naver.LoginWithNaverId({
	// 	clientId: naverAPI,
	// 	callbackUrl: "127.0.0.1:3000",
	// 	callbackHandle: true,
	// 	loginButton: {
	// 		color: "green",
	// 		type: "3",
	// 		height: "30"
	// 	}
	// });

	const responseFail = (err) => {
		console.log(err);
	}

	if (display) {
		return ReactDOM.createPortal(
			<div className="modalWrapper" >
				<div className="modalBg" onClick={clickBg} ></div>
				<div className="sign_in_modalBox">
					<div className="sign_in_wrap">
						<div className="sign_in_container">
							
							<p className="sign_in_name" >로그인</p>
							
							<div className="input_container_wrap">
								<div className="input_container">
									<div className="input_name">
										<span>아이디</span>
									</div>
									<input className="sign_in_idInput" type="text" onChange={onChangeId} tabIndex="1" autoFocus required />
								</div>

								<div className="input_container">
									<div className="input_name">
										<span> 비밀번호</span>
									</div>
									<input className="sign_in_pwInput" type="password" onChange={onChangePw} tabIndex="2" onKeyPress={onKeyEnt} required />
								</div>
							</div>

							<label className="remember_id">
								<input type="checkbox" checked={checkRememberId} onChange={e => onCheckboxChangeHandler(e)} tabIndex="3" />아이디 기억하기
										</label>

							<div className="login_message">
								<p>{isLogInMsg}</p>
							</div>
							<div className="btn_wrap">
								<button className="btn" onClick={onClickSignInBtn} tabIndex="4" >로그인</button>
								<button className="btn" onClick={signupOpenModal} tabIndex="5" >간편 회원가입</button>
								<Signup ref={signupRef} />
							</div>
							<GoogleLogin className="oauth_btn" clientId={googleAPI} buttonText="Google" onSuccess={responseGoogle} onFailure={responseFail} />
							<KakaoLogin className="oauth_btn" clientId={kakaoAPI} buttonText="Kakao" onSuccess={responseKakao} onFailure={responseFail} getProfile="true" />


						</div>
					</div>
				</div>
			</div>, document.getElementById("modal_root")
		);
	}
	return null;

})

export default Signin;         