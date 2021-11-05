import React, { useState, useEffect } from "react";
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Home } from "./Home.js";
import { Profile } from "./Profile.js";
import { New } from "./New.js"
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    var rawToken = localStorage.getItem("token");
    setToken(rawToken ? rawToken : "");
  }, []);

  const authed = !(token === "");

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      {authed ? "+" : "-"}
      <Switch>
        <Route path="/signup">
          {authed ? <Redirect to="/" /> : <SignUp setToken={setToken} />}
        </Route>
        <Route path="/login">
          {authed ? <Redirect to="/" /> : <Login setToken={setToken} />}
        </Route>
        <Route path="/profile">
          {authed ? (
            <Profile token={token} setToken={setToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/new" exact>
          {authed ? <New token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/" exact>
          {authed ? <Home token={token} setToken={setToken}/> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
