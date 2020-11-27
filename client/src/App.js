import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/nav/nav.js'
import Main from './component/main/main.js'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>

      <div className="contents">
        <Switch>
          <Route exact path="/" component={Main}>
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
