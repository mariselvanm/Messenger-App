import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/contacts">
          {/*  */}
        </Route>
        <Route path="/users">
          {/*  */}
        </Route>
        <Redirect from="/" to="/contacts" />
      </Switch>
  </Router>
  );
}

export default App;
