import "./App.css";
import "./fonts/Basteleur-Bold.woff";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Track from "./pages/Track";
import Plants from "./pages/Plants";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <h1>Welcome back</h1>
      <h2>Emily</h2>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/track">Track</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/track">
            <Track />
          </Route>
          <Route exact path="/plants">
            <Plants />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>

      <h2>Household</h2>
    </div>
  );
}

export default App;
