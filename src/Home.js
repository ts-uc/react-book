import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get("https://api-for-missions-and-railways.herokuapp.com/books", {
        headers: { Authorization: "Bearer " + props.token },
      })
      .then(function (response) {
        console.log(response);
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
    axios
      .get("https://api-for-missions-and-railways.herokuapp.com/users", {
        headers: { Authorization: "Bearer " + props.token },
      })
      .then(function (response) {
        console.log(response);
        setUserName(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  }, [props.token]);

  const logout = () => {
    localStorage.setItem("token", "");
    props.setToken("");
  };

  const reviews = items.map((x) => (
    <div>
      <h3>{x.title}</h3>
      <p>詳細: {x.detail}</p>
      <p>レビュー: {x.review}</p>
      <p>投稿者: {x.reviewer}</p>
    </div>
  ));

  if (props.token === "") {
    return (
      <>
        <h2>Home</h2>
        <p>You are not logged in.</p>
        <Link to="/login">Login</Link>
      </>
    );
  }

  return (
    <>
      <header>
        <div>{userName}</div>
        <div>
          <Link to="/profile">Profile Setting</Link>
        </div>
        <div><a href="javacript:void(0)" onClick={logout}>Logout</a></div>
      </header>
      <h2>Home</h2>
      {reviews}
    </>
  );
};
