import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main'
import Goal from './component/goal/Goal'
import Nav from './component/nav/Nav'

import ChangePassword from "./component/mypage/changePassword/ChangePassword";
import Chronicles from "./component/mypage/chronicles/Chronicles"


function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <div className="contents">
        <Switch>
          <Route path="/myPage/passwordChange">
            <ChangePassword/>
          </Route>

          <Route path="/myPage/chronicles">
            <Chronicles/>
          </Route>

          <Route path="/goal" >
            <Goal />
          </Route>

          <Route exact path="/" >
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
