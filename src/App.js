import React, { useState, useEffect } from "react";
import { Login } from "./Login.js";
import { SignUp } from "./SignUp.js";
import { Home } from "./Home.js";
import { Profile } from "./Profile.js";
import { New } from "./New.js";
import { Detail } from "./Detail.js";
import { Edit } from "./Edit.js"
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [detail, setDetail] = useState({});

  useEffect(() => {
    var rawToken = localStorage.getItem("token");
    setToken(rawToken ? rawToken : "");
    var rawUserName = localStorage.getItem("userName");
    setUserName(rawUserName ? rawUserName : "");
  }, []);

  const authed = !(token === "");

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      {authed ? "+" : "-"}
      <Switch>
        <Route path="/signup">
          {authed ? <Redirect to="/" /> : <SignUp setToken={setToken} setUserName={setUserName} />}
        </Route>
        <Route path="/login">
          {authed ? <Redirect to="/" /> : <Login setToken={setToken} setUserName={setUserName} />}
        </Route>
        <Route path="/profile">
          {authed ? (
            <Profile />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/new" exact>
          {authed ? <New /> : <Redirect to="/login" />}
        </Route>
        <Route path="/detail/:id" exact>
          {authed ? <Detail setDetail={setDetail} detail={detail} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/edit/:id" exact>
          {authed ? <Edit setDetail={setDetail} detail={detail} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/" exact>
          {authed ? (
            <Home setToken={setToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
