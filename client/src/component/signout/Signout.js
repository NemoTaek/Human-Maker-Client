import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from "react-dom"
import '../modal.css'
import './Signout.css'

const Signout = forwardRef((props, ref) => {

	const [display, setDisplay] = useState(false)

	useImperativeHandle(ref, () => {
		return {
			modalOpen: () => openModal(),
			modalClose: () => closeModal()
		}
	})

	const openModal = () => {
		setDisplay(true);
	}

	const closeModal = () => {
		setDisplay(false);
		axios
			.get("http://54.180.120.81:5000/signOut")
			.then(res => {
				if (res.status === 205) {
					props.onLogout();
					document.location.replace("/")
				}
			}).catch(err => {
				console.log(err);
			})
	}
	const clickBg = () => {
		setDisplay(false);
	}


	if (display) {
		return ReactDOM.createPortal(
			<div className="modalWrapper">
				<div className="modalBg" onClick={clickBg} ></div>
				<div className="modalBox">
					<div className="logout_modal_wrap">
						<button className="ok" onClick={closeModal}>X</button>
						<div className="logout_modal_content">
							<p><span>{props.id}</span>님이 로그아웃 되었습니다.</p>
							<p>목표를 위해 화이팅!!</p>
							<button className="logoutModalBtn" onClick={closeModal}>아자!</button>
						</div>
						<div className="margin"></div>
					</div >
				</div>
			</div>, document.getElementById("modal_root")
		)
	}
	return null;
})

export default Signout;