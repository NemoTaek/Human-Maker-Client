import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from './component/nav/nav'
import signup from './component/signup/Signup'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Route path="/signup" component={signup} />
    </div>
  );
}

export default App;
