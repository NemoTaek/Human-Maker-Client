import React, { useState, useRef, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './component/nav/Nav'
import Signup from './component/signup/Signup'
import Main from './component/main/Main'

function App() {
  const [isLogin, setIsLogin] = useState("false");

  const login = () => setIsLogin(!isLogin);

  return (
    <div className="App">
      <header className="header">
        <button onClick={login} style={{ width: "100%", height: "30px" }}>{isLogin.toString()}</button>
        <Nav isLogin={isLogin} />
      </header>

      <div className="contents">
        <Switch>

          <Route path="/signup" component={Signup}>
            <Signup />
          </Route>

          <Route exact path="/" component={Main}>
            <Main />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
