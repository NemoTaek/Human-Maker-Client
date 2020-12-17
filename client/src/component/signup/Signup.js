import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import ReactDOM from "react-dom"
import axios from "axios";
import "./Signup.css"


const Signup = forwardRef((props, ref) => {
	const [display, setDisplay] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			signupOpen: () => openSignup(),
			signupClose: () => closeSignup()
		}
	})

	const openSignup = () => {
		setDisplay(true);
	}
	const closeSignup = () => {
		setDisplay(false);
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
	}

	const [id, setId] = useState("");
	const [idCheckMsg, setIdCheckMsg] = useState("error");
	const [idAvailable, setIdAvailable] = useState(false);
	const [idCheck, setIdCheck] = useState(false);

	const [password, setPassword] = useState("");
	const [pwCheckMsg, setPwCheckMsg] = useState("error");
	const [pwCheck, setPwCheck] = useState(false);

	const [pwDouble, setPwDouble] = useState("");
	const [pwDoubleMsg, setPwDoubleMsg] = useState("error");
	const [pwDoubleCheck, setPwDoubleCheck] = useState(false);

	const [subMessage, setSubMessage] = useState("error");

	const userData = { id: id, password: password }

	const onChangeId = e => {
		setId(e.target.value);

	}
	useEffect(() => {
		let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
		let test = spe.test(id)

		if (!id) {
			setIdCheckMsg("error")
		}
		else if (id.length < 4) {
			setIdCheckMsg("아이디는 4글자 이상만 사용 가능합니다.");
			setIdAvailable(false);
		}
		else if (id.search(/\s/) !== -1) {
			setIdCheckMsg("공백은 사용 할 수 없습니다.");
			setIdAvailable(false);
		}
		else if (test === true) { // 숫자도 특수문자로 검색된다....
			setIdCheckMsg("아이디에 특수문자는 사용 할 수 없습니다.");
			setIdAvailable(false);
		}
		else {
			setIdCheckMsg("아이디 중복확인이 필요합니다.")
			setIdAvailable(true);
		}

	}, [id])

	const onClickDoubleBtn = (e) => {
		e.preventDefault();
		if (idAvailable) {
			axios
				.post("http://localhost:5000/signup/idDoubleCheck", { id: id })
				.then(res => {
					if (res.status === 200) {
						console.log(res);
						setIdCheckMsg("이미 사용중인 아이디 입니다.");
						setIdCheck(false);
					}
					else if (res.status === 201) {
						console.log(res);
						setIdCheckMsg("사용 가능한 아이디 입니다.");
						setIdCheck(true);
					}
				}).catch(err => {
					console.log(err);
					setIdCheckMsg("아이디를 다시 확인해 주세요.");
					setIdCheck(false);
				})
		}
		else {
			setIdCheckMsg("아이디가 유효하지 않습니다.");
			setIdCheck(false);
		}
	}

	const onChangePw = e => {
		setPassword(e.target.value);
	}
	useEffect(() => {
		// let num = password.search(/[0-9]/g);
		// let eng = password.search(/[a-z]/ig);
		let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
		let test = spe.test(password)

		if (!password) {
			setPwCheckMsg("error")
		}
		else if (password.length < 8) {
			setPwCheckMsg("비밀번호는 8자리 이상만 가능합니다.");
			setPwCheck(false);
		}
		else if (password.search(/\s/) !== -1) {
			setPwCheckMsg("공백없이 입력해 주세요.");
			setPwCheck(false);
		}
		else if (test === false) { // 작동 안하는듯..
			setPwCheckMsg("영문, 숫자, 특수문자를 조합해서 입력해주세요.");
			setPwCheck(false);
		}
		else {
			setPwCheckMsg("사용가능한 비밀번호 입니다.");
			setPwCheck(true);
		}
	}, [password])


	const onChangePwDoubleCk = e => {
		setPwDouble(e.target.value);
	}
	useEffect(() => {
		if (!password || !pwDouble) {
			setPwDoubleMsg("error")
			setPwDoubleCheck(false);
		}
		else if (pwDouble === password) {
			setPwDoubleMsg("비밀번호가 일치합니다.");
			setPwDoubleCheck(true);
		}
		else {
			setPwDoubleMsg("비밀번호가 일치하지 않습니다.");
			setPwDoubleCheck(false);
		}

	}, [password, pwDouble])


	const onClickSignUpBtn = (e) => {
		e.preventDefault();
		if (idCheck && pwCheck && pwDoubleCheck) {
			axios
				.post("http://localhost:5000/signup", userData)
				.then((res) => {
					if (res.status === 201) {
						alert("가입 되었습니다. 로그인 후 사용 가능합니다.");
						document.location.replace("/");
					}
				}).catch(err => {
					console.log(err);
				})
		}
		if (!idCheck) {
			setSubMessage("아이디를 확인해 주세요.");
			return
		}
		if (!pwCheck) {
			setSubMessage("비밀번호를 확인해 주세요.");
			return
		}
		if (!pwDoubleCheck) {
			setSubMessage("비밀번호가 일치하지 않습니다.");
			return
		}
	}

	if (display) {
		return ReactDOM.createPortal(
			<div className="modalWrapper">
				<div className="modalBg" onClick={closeSignup}></div>
				<div className="sign_up_modalBox">
					<div className="sign_up_wrap">
						<div className="sign_up_container">

							<p className="sign_up_name" >회원가입</p>

							<div className="input_container_wrap">

								<div className="sign_up_idInput_container">
									<span>아이디</span>
									<input className={idCheckMsg === "error" ? "sign_up_idInput" : (idCheck ? "successInput" : "falseInput")}
										type="text" onChange={onChangeId} autoFocus required />
									<button className="idCheck_btn" onClick={onClickDoubleBtn}>중복확인</button>
									<div className={idCheckMsg === "error" ? "none_checkMsg" : (idCheckMsg === "사용 가능한 아이디 입니다." ? "successMsg" : "falseMsg")}>
										<p>{idCheckMsg}</p>
									</div>
								</div>


								<div className="sign_up_input_container">
									<span>비밀번호</span>
									<input className={pwCheckMsg === "error" ? "sign_up_pwInput" : (pwCheck ? "successPwInput" : "falsePwInput")}
										type="password" onChange={onChangePw} required />
									<div className={pwCheckMsg === "error" ? "none_checkMsg" : (pwCheckMsg === "사용가능한 비밀번호 입니다." ? "successMsg" : "falseMsg")}>
										<p>{pwCheckMsg}</p>
									</div>
								</div>

								<div className="sign_up_input_container">
									<span>비밀번호 확인</span>
									<input className={pwDoubleMsg === "error" ? "sign_up_pwInput" : (pwDoubleCheck ? "successPwInput" : "falsePwInput")}
										type="password" onChange={onChangePwDoubleCk} required />
									<div className={pwDoubleMsg === "error" ? "none_checkMsg" : (pwDoubleMsg === "비밀번호가 일치합니다." ? "successMsg" : "falseMsg")}>
										<p>{pwDoubleMsg}</p>
									</div>
								</div>

							</div>
							<div className="signup_btn_wrap">
								<button className="sign_up_btn" onClick={onClickSignUpBtn}>가입신청</button>
								<div className={subMessage === "error" ? "none_checkMsg" : "falseMsg"} >
									<p>{subMessage}</p>
								</div>
							</div>


						</div>
					</div>

				</div>
			</div>, document.getElementById("modal_root")
		);
	}
	return null;

})

export default Signup;