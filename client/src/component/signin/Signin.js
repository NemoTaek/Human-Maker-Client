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
	const naverAPI = "";
	const { naver } = window;

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
	}, [display]);
	useEffect(() => {
		if (display) {
			naverLogin();
		}
	}, [display]);

	// const isLogin = useSelector(state => state.login.isLogin);
	const [isLogInMsg, setIsLogInMsg] = useState("error");

	const [id, setId] = useState(props.rememberId || "");
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

		if (!id && !password) {
			setIsLogInMsg("아이디를 입력해주세요.");
		}
		else if (id && !password) {
			setIsLogInMsg("비밀번호를 입력해주세요.");
		}
		else {
			setIsLogInMsg("error");
		}
		axios
			.post("https://humanmaker.ml/signin", userData)
			.then(res => {
				if (res) {
					const accessToken = res.data;
					// console.log(accessToken)
					if (document.cookie === "") {
						document.cookie = `sid=${accessToken.token}`;
						// console.log(accessToken.token)
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
					login(accessToken);
				}
				else {
					setIsLogInMsg("등록되지 않은 아이디 또는 잘못 된 비밀번호 입니다.");
				}
			}).catch(err => {
				console.log(err);
			})

		// onId();
		// onPassword(); // 추후에 테스트, 현재 오류
		// props.onLogin();
		// closeLogin();
	}
	const login = (accessToken) => {
		axios.
			defaults.headers.common[
			"Authorization"
		] = `Bearer ${accessToken.token}`;
		console.log("axiosHeaders : ", axios.defaults.headers.common.Authorization);

		onId();	// input에 있는 id를 store에 저장
		onPassword();	// input에 있는 password를 store에 저장
		props.onLogin();	// isLogin을 true로 변환
		document.location.replace("/goal");
	}

	const responseGoogle = (res) => {
		console.log(res);
		setId(res.profileObj.name);	// 구글아이디로 로그인하면 그 id 값을 state에 설정
		// onId();	// 위에서 id값을 googleId로 했으므로 onId로 이 id를 store에 저장
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
			callbackUrl: "https://humanmaker.ml/",
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

							<div className={isLogInMsg === "error" ? "noneLoginMsg" : (isLogInMsg !== "error" ? "falseLoginMsg" : "noneLoginMsg")}>
								<p>{isLogInMsg}</p>
							</div>
							<div className="btn_wrap">
								<button className="btn" onClick={onClickSignInBtn} tabIndex="4" >로그인</button>
								<button className="btn" onClick={signupOpenModal} tabIndex="5" >간편 회원가입</button>
								<Signup ref={signupRef} />
							</div>
							<div className="oauth_wrap">
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