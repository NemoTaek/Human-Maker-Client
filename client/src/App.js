import React from "react";
// import LogoutContainer from "react-modal"
import { Route, Switch } from 'react-router-dom';
import './App.css';

import SignUp from './component/signup/Signup'
import Main from './component/main/Main'

import LoginContainer from './containers/loginContainer'
import NavContainer from "./containers/navContainer";
// import LogoutContainer from "./containers/logoutContainer";




function App() {
  
 
  return (
    <div className="App">
      <header className="header">
        <NavContainer />
      </header>
      <div className="contents">
        <Switch>

          <Route path="/signup" >
            <SignUp />
          </Route>

          <Route path="/login" >
            <LoginContainer />
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
