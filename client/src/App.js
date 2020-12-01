import React, { useState} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './component/nav/Nav'
import SignUp from './component/signup/Signup'
import SignIn from './component/signin/Signin'
import SignOut from './component/signout/Signout'
import Main from './component/main/Main'


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => setIsLogin(!isLogin);


  const [isModalState, setIsModalState] = useState(false);
  const [isModalClose, setIsModalClose] = useState(false)

  const onClickModalBtn = () => {
    setIsModalClose(!isModalClose);
    setIsModalState(!isModalState)
}


  return (
    <div className="App">
      <header className="header">
        <button onClick={login} style={{ width: "100%", height: "30px" }}>{isLogin.toString()}</button>
        <Nav isLogin={isLogin} />
      </header>
      {/* <Route path="/signup" component={signUp} />
      <Route path="/login" component={login} />
      <Route path="/Signout" component={Signout} /> */}

      <div className="contents">
        <Switch>

          <Route path="/signup" component={SignUp}>
            <SignUp />
          </Route>

          <Route path="/login" component={SignIn}>
            <SignIn isLogin={isLogin} />
          </Route>

          <Route path="/logout" component={SignOut}>
            <SignOut onClickClose={onClickModalBtn} isModalOpen={isModalState}  />
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
