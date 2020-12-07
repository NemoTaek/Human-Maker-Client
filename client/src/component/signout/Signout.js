import React from 'react';
import './Signout.css'


function Signout({ id, onLogout }) {
	const logoutModal = () => {
		onLogout();
		document.location.href = "/";
	}
	return (
		<div className="logout_modal_wrap">
			<div className="logout_modal">
				<div className="logout_modal_content">
					<p><span>{id}</span>님이 로그아웃 되었습니다.</p>
					<p>목표를 위해 화이팅!!</p>
					<button className="logoutModalBtn" onClick={logoutModal}>아자!</button>
				</div>
			</div>
		</div >
	);
}

export default Signout;