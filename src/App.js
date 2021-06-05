import "./App.scss";
import "./fonts/Basteleur-Bold.woff";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Track from "./pages/Track";
import Plants from "./pages/Plants";
import Account from "./pages/Account";

import Users from "./components/Users";
import data from "./data/users.json";

function App() {
  const [titles, setTitles] = useState({
    title: "Welcome back",
    subtitle: "Emily",
  });
  return (
    <div className="App">
      <Router>
        <header>
          <div className="container">
            <h1>{titles.title}</h1>
            <h2>{titles.subtitle}</h2>
            <nav>
              <ul>
                <li>
                  <Link
                    onClick={() =>
                      setTitles({ title: "Track", subtitle: "your plant care" })
                    }
                    className="button track"
                    to="/track"
                  >
                    track
                  </Link>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      setTitles({ title: "Welcome back", subtitle: "Emily" })
                    }
                    exact
                    className="home"
                    activeClassName="active"
                    to="/"
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      setTitles({
                        title: "Calendar",
                        subtitle: "all plants",
                      })
                    }
                    className="calendar"
                    activeClassName="active"
                    to="/calendar"
                  >
                    calendar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      setTitles({
                        title: "Your urban jungle",
                        subtitle: "all plants",
                      })
                    }
                    className="plants"
                    activeClassName="active"
                    to="/plants"
                  >
                    plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      setTitles({ title: "Account", subtitle: "your settings" })
                    }
                    className="account"
                    activeClassName="active"
                    to="/account"
                  >
                    account
                  </NavLink>
                </li>
              </ul>
            </nav>

            <h2>household</h2>
            <Users users={data} />
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
