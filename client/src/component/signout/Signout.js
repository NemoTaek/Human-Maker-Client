import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from "react-dom"
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

    // const closeModal = () => {
    //     setDisplay(false);
    //     props.onLogout();
    //     document.location.replace("/")
    // }
    // const clickBg = () => {
    //     setDisplay(false);
    // }

		const closeModal = () => {
			setDisplay(false);
			// axios
			// 	.get("http://54.180.120.81:5000/signOut")
			// 	.then(res => {
			// 		if (res.status === 205) {
						props.onLogout();
						document.location.replace("/")
			// 		}
			// 	}).catch(err => {
			// 		console.log(err);
			// 	})
		}

		const clickBg = () => {
			setDisplay(false);
		}

    if (display) {
        return ReactDOM.createPortal(
            <div className="modalWrapper">
                <div className="modalBg" onClick={clickBg} ></div>
                <div className="sign_out_modalBox">
                    <div className="logoutMsg">
                        <h3>정말.. 로그아웃 합니까 Human??</h3>
                        <div className="todayMsg">
                            <p>인간이 되는 그날까지....</p>
                        </div>
                        <div className="logoutBtnContainer">
                         <button className="logoutModalBtn" onClick={closeModal}>화이팅!!</button>
                        </div>
                    </div>   
                </div>
            </div>, document.getElementById("modal_root")
        )
    }
    return null;
})

export default Signout;