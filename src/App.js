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
import Plant from "./pages/Plant";
import Account from "./pages/Account";

import Sidebar from "./pages/Sidebar";

import Users from "./components/users/Users";
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
                  <NavLink
                    onClick={() =>
                      setTitles({ title: "Welcome back", subtitle: "Emily" })
                    }
                    exact
                    className="home"
                    activeClassName="active"
                    to="/"
                  >
                    <p>home</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      setTitles({
                        title: "Calendar",
                        subtitle: "your care routine",
                      })
                    }
                    className="calendar"
                    activeClassName="active"
                    to="/calendar"
                  >
                    <p>calendar</p>
                  </NavLink>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      setTitles({
                        title: "Track",
                        subtitle: "update your plants",
                      })
                    }
                    className="track"
                    to="/track"
                  >
                    <p>track</p>
                  </Link>
                </li>
                <li>
                  <NavLink
                    onClick={() =>
                      setTitles({
                        title: "Plants",
                        subtitle: "Your urban jungle",
                      })
                    }
                    className="plants"
                    activeClassName="active"
                    to="/plants"
                  >
                    <p>plants</p>
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
                    <p>account</p>
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="household desktop">
              <h2>household</h2>
              <Users users={data} />
            </div>
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
            <Route exact path="/plant/:plant" component={Plant} />
          </Switch>
        </main>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
