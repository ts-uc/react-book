import React, { useState } from "react";
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Home } from "./Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp setToken={setToken} />
        </Route>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/">
          <Home token={token} />
        </Route>
      </Switch>
    </Router>
  );
}
