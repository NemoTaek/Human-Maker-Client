import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from "react-dom"
import axios from 'axios'
import '../modal.css'
import './Signin.css'
import { useDispatch } from 'react-redux';
import { userid, userpassword } from "../../modules/User";
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

const Signin = forwardRef((props, ref) => {

	const googleAPI = "";
	const kakaoAPI = "";
	const naverAPI = "";
	const { naver } = window;

	const [display, setDisplay] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			loginOpen: () => openLogin(),
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

	useEffect(() => {
		if (display) {
			if (props.isRememberId) {
				document.getElementsByClassName("sign_in_idInput")[0].value = props.rememberId;
			}
		}
	}, [display]);
	useEffect(() => {
		if (display) {
			naverLogin();
		}
	}, [display]);

	// const isLogin = useSelector(state => state.login.isLogin);
	const [isLogInMsg, setIsLogInMsg] = useState("");

	const [id, setId] = useState(props.rememberId);
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
		// 			document.location.replace("/");
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

	const onClickSignUpBtn = () => {
		document.location.replace("/signup");
	}

	const responseGoogle = (res) => {
		console.log(res);
		setId(res.profileObj.name);	// 구글아이디로 로그인하면 그 id 값을 state에 설정
		onId();	// 위에서 id값을 googleId로 했으므로 onId로 이 id를 store에 저장
	}

	const responseKakao = (res) => {
		console.log(res);
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

	const naverLogin = () => {
		const responseNaver = new naver.LoginWithNaverId({
			clientId: naverAPI,
			callbackUrl: "http://localhost:3000/",
			isPopup: false,
			loginButton: {
				color: "green",
				type: "3",
				height: "30"
			}
		});
		responseNaver.init();
	}


	const responseFail = (err) => {
		console.log(err);
	}

	if (display) {
		return ReactDOM.createPortal(
			<div className="modalWrapper" >
				<div className="modalBg" onClick={clickBg} ></div>
				<div className="modalBox">
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

							<div className="sign_in_btn_wrap">
								<button className="sign_in_btn" onClick={onClickSignInBtn}  >로그인</button>
								<button className="sign_up_btn" onClick={onClickSignUpBtn} >간편 회원가입</button>

								<GoogleLogin className="google" clientId={googleAPI} buttonText="Google" onSuccess={responseGoogle} onFailure={responseFail} />
								<KakaoLogin className="kakao" clientId={kakaoAPI} buttonText="Kakao" onSuccess={responseKakao} onFailure={responseFail} getProfile="true"
									style={{
										width: "100%", height: "50px", lineHeight: "50px", color: "rgb(60,30,30)", backgroundColor: "rgb(255,255,0)",
										border: "1px solid transparent", borderRadius: "3px", fontSize: "16px", textAlign: "center"
									}} />
								<div className="naver" id="naverIdLogin" onClick={naverLogin}></div>
							</div>


						</div>
					</div>
				</div>
			</div>, document.getElementById("modal_root")
		);
	}
	return null;

})

export default Signin;         