import React, { useCallback } from "react";
import Nav from "../component/nav/Nav";
import { login, logout } from "../modules/IsLogin"
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

// react-hooks 써서 해보기
const NavContainer = () => {
  const status = useSelector(state => state.IsLogin.isLogin);
  // const dispatch = useDispatch();
  // const onLogin = useCallback(() => dispatch(login()), [dispatch])
  // const onLogout = useCallback(() => dispatch(logout()), [dispatch])
  return <Nav value={status} />;
};
export default NavContainer