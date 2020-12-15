import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main'
import Goal from './component/goal/Goal'
import Nav from './component/nav/Nav'
import Mypage from './component/mypage/Mypage'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <div className="contents">
        <Switch>
          <Route path="/goal" >
            <Goal />
          </Route>

          <Route path="/mypage" >
            <Mypage />
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
