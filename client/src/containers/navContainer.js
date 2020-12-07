import React from "react";
import Nav from "../component/nav/Nav";
import { useSelector } from 'react-redux';

// react-hooks 써서 해보기
const NavContainer = () => {
  const status = useSelector(state => state.Toggle.isLogin);
  return <Nav status={status} />;
};
export default NavContainer