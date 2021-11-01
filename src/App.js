import React, { useState } from "react";
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Home } from "./Home.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        {token}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <SignUp setToken={setToken} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/">
            <Home token={token}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

