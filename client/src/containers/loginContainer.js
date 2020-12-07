import React, { useCallback } from "react";
import SignIn from "../component/signin/Signin";
import { login, rememberid, forgotid } from "../modules/Toggle"
import { useSelector, useDispatch } from 'react-redux';

// react-hooks 써서 해보기
const LoginContainer = () => {
  const rememberId = useSelector(state => state.User.id);
  const isRememberId = useSelector(state => state.Toggle.isRememberId);
  const dispatch = useDispatch();
  const onLogin = useCallback(() => dispatch(login()), [dispatch])
  const onRememberId = useCallback(() => dispatch(rememberid()), [dispatch])
  const onForgotId = useCallback(() => dispatch(forgotid()), [dispatch])

  return <SignIn rememberId={rememberId} onLogin={onLogin} isRememberId={isRememberId} onRememberId={onRememberId} onForgotId={onForgotId}/>;
};
export default LoginContainer

// 이 컴포넌트를 redux와 연결하기 위해서
// connect(mapStateToProps, mapDispatchToProps)(연동하고싶은 컴포넌트)을 작성해야 한다.

// const loginContainer = ({ value, isLogin }) => {
//   return <SignIn value={value} onLogin={isLogin} />;
// };

// // redux store내의 상태를 컴포넌트의 props로 넘겨주기 위한 함수
// const mapStateToProps = state => ({
//   isLogin: state.IsLogin.isLogin
// });

// // 액션 생성함수를 컴포넌트의 props로 넘겨주기 위한 함수
// const mapDispatchToProps = dispatch => ({
//   login: () => {
//     // console.log("login")
//     dispatch(login());
//   },
//   logout: () => {
//     // console.log("logout")
//     dispatch(logout());
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);


// 매번 dispatch에 넣는 것이 귀찮다면 다음을 이용하자
// import {bindActionsCreateors} from "redux"
// const mapDispatchToProps = dispatch => 
//   bindActionCreateors(
//     {
//       login,
//       logout
//     },
//     dispatch
//   );
