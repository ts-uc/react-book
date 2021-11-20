import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../App";

export const Home = (props) => {
  const [items, setItems] = useState([]);
  const [userName, setUserName] = useState("");

  const { token, setToken } = useContext(TokenContext);

  useEffect(() => {
    axios
      .get("https://api-for-missions-and-railways.herokuapp.com/books", {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function (response) {
        console.log(response);
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
        alert("書籍一覧情報の取得に失敗しました。");
      });
    axios
      .get("https://api-for-missions-and-railways.herokuapp.com/users", {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function (response) {
        console.log(response);
        setUserName(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
        alert("ユーザー名の取得に失敗しました。");
      });
  }, []);

  const logout = () => {
    localStorage.setItem("token", "");
    setToken("");
  };

  const reviews = items.map((x) => (
    <li>
      <Link to={`/detail/${x.id}`}>{x.title}</Link>
    </li>
  ));

  /*

  if (localStorage.getItem("token") === "") {
    return (
      <>
        <h2>Home</h2>
        <p>You are not logged in.</p>
        <Link to="/login">Login</Link>
      </>
    );
  }
 */

  return (
    <>
      <header>
        <div>{userName}</div>
        <div>
          <Link to="/profile">Profile Setting</Link>
        </div>
        <div>
          <Link to="/new">New Post</Link>
        </div>
        <div>
          <a href="javacript:void(0)" onClick={logout}>
            Logout
          </a>
        </div>
      </header>
      <h2>Home</h2>
      {reviews}
    </>
  );
};
