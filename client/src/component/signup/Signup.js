import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css"

function Signup() {
	const [id, setId] = useState("");
	const [idCheckMsg, setIdCheckMsg] = useState(" ");
	const [idAvailable, setIdAvailable] = useState(false);
	const [idCheck, setIdCheck] = useState(false);

	const [password, setPassword] = useState("");
	const [pwCheckMsg, setPwCheckMsg] = useState(" ");
	const [pwCheck, setPwCheck] = useState(false);

	const [pwDouble, setPwDouble] = useState("");
	const [pwDoubleMsg, setPwDoubleMsg] = useState(" ");
	const [pwDoubleCheck, setPwDoubleCheck] = useState(false);

	const [subMessage, setSubMessage] = useState("");

	const userData = { id: id, password: password }

	const onChangeId = e => {
		setId(e.target.value);

	}
	useEffect(() => {
		let spe = /[~!@#$%^&*()_+|<>?:{}]/gi;
		let test = spe.test(id)

		if (!id) {
			setIdCheckMsg("")
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
				.post("http://54.180.120.81:5000/signup/idDoubleCheck", { id: id })
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
						console.log(idCheck);
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
			setPwCheckMsg("")
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
			setPwDoubleMsg("")
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
				.post("http://54.180.120.81:5000/signup", userData)
				.then(() => {
					alert("가입 되었습니다. 로그인 후 사용 가능합니다.");
					document.history.replace("/");
					//document.history.push
					//document.location.href
					//document.location.replace
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

	//아이디 한글입력 방지, 비밀번호 영문 우선 설정
	return (
		<div className="sign_up_wrap">
			<div className="sign_up_container">
				<p className="sign_up_name" >회원가입</p>
				<div className="input_container_wrap">
					<div className="input_container idInput_container">
						<span>아이디</span>
						<div className="input_btn_wrap">
							<input className="sign_up_idInput" type="text" onChange={onChangeId} autoFocus required />
							<button className="idCheck_btn" onClick={onClickDoubleBtn}>중복확인</button>
						</div>
						<p className="checkMsg">{idCheckMsg}</p>

					</div>

					<div className="input_container pwInput_container">
						<span>비밀번호</span>
						<input className="sign_up_pwInput" type="password" onChange={onChangePw} required />
						<p className="checkMsg">{pwCheckMsg}</p>
					</div>

					<div className="input_container pwCheckInput_container">
						<span>비밀번호 확인</span>
						<input className="sign_up_pwCheckInput" type="password" onChange={onChangePwDoubleCk} required />
						<p className="checkMsg">{pwDoubleMsg}</p>
					</div>
				</div>

				<button className="sign_up_btn" onClick={onClickSignUpBtn}>가입신청</button>
				<p className="subMessage">{subMessage}</p>
			</div>

			<div className="oauthImg">
				{/* <img className onClick={} ></img>
                <img className onClick={} ></img>
                <img className onClick={} ></img>*/}

			</div>
		</div>
	);
}

export default Signup;