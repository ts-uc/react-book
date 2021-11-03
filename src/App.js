import React, { useState, useEffect } from "react";
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Home } from "./Home.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    var rawToken = localStorage.getItem("token");
    setToken(rawToken ? rawToken : "");
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
