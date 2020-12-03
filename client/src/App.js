import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './component/signup/Signup'
import Main from './component/main/Main'

import SignInContainer from './containers/loginContainer.js';
import SignOutContainer from './containers/logoutContainer.js';
import NavContainer from './containers/navContainer.js';


function App() {
  return (
    <div className="App">
      <header className="header">
        <NavContainer />
      </header>

      <div className="contents">
        <Switch>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <SignInContainer />
          </Route>

          <Route path="/logout">
            <SignOutContainer />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
