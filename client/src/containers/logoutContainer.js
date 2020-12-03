import React, { useCallback } from "react";
import SignOut from "../component/signout/Signout";
import { logout } from "../modules/User"
import { useSelector, useDispatch } from 'react-redux';


// react-hooks 써서 해보기
const LogoutContainer = () => {
  const id = useSelector(state => state.User.id);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(logout()), [dispatch])
  return <SignOut id={id} onLogout={onLogout} />;
};
export default LogoutContainer