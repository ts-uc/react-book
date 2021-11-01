import React, { useState } from "react";
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
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
            <SignUp setToken={setToken} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
