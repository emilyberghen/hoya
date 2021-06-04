import "./App.scss";
import "./fonts/Basteleur-Bold.woff";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Track from "./pages/Track";
import Plants from "./pages/Plants";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div>
            <h1>Welcome back</h1>
            <h2>Emily</h2>
            <nav>
              <ul>
                <li className="button track">
                  <NavLink to="/track">track</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/">
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/calendar">
                    calendar
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/plants">
                    plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    classname="account"
                    to="/account"
                  >
                    account
                  </NavLink>
                </li>
              </ul>
            </nav>

            <h2>household</h2>
          </div>
        </header>

        <main>
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
        </main>
      </Router>
    </div>
  );
}

export default App;
