import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="message-app-container">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/users">
            {/*  */}
          </Route>
          <Redirect from="/" to="/contacts" />
        </Switch>
    </Router>
  </div>
  );
}

export default App;
