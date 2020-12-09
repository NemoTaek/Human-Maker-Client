import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main'
import NavContainer from "./containers/navContainer";

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavContainer />
      </header>
      <div className="contents">
        <Switch>
          <Route exact path="/" >
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
