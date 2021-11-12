import React, { useState, useEffect } from "react";
import { Login } from "./components/Login.js";
import { SignUp } from "./components/SignUp.js";
import { Home } from "./components/Home.js";
import { Profile } from "./components/Profile.js";
import { New } from "./components/New.js";
import { Detail } from "./components/Detail.js";
import { Edit } from "./components/Edit.js"
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  const [detail, setDetail] = useState({});

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
