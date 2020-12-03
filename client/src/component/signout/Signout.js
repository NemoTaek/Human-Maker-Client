import React from 'react';
import './Signout.css'


function Signout({ id, onLogout }) {
	const logoutModal = () => {
		onLogout();
		document.location.href = "/";
	}
	return (
		<div className="logoutModalOp">
			<div className="logoutMsg">
				<h3>{id}님이 로그아웃 되었습니다.</h3>
				<div>목표를 위해 화이팅!!</div>
				<button className="logoutModalBtn" onClick={logoutModal}>확인</button>
			</div>
		</div >
	);
}

export default Signout;