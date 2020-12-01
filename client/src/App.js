import './App.css';
import { Route } from "react-router-dom";
import Nav from './component/nav/nav'
import signUp from './component/signup/Signup'
import login from './component/signin/Signin'
import logout from './component/signout/Signout'


function App() {
  
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Route path="/signup" component={signUp} />
      <Route path="/login" component={login} />
      <Route path="/logout" component={logout} />
    </div>
  );
}

export default App;
