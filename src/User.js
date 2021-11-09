import * as React from "react";
import axios from "axios";

export const getToken = () => {
  var rawToken = localStorage.getItem("token");
  return rawToken ? rawToken : "";
};

export const isLoggedin = () => {
  var rawToken = localStorage.getItem("token");
  return !!rawToken;
};

export const postLogIn = (arg) => {
  var token = "";
  axios
    .post("https://api-for-missions-and-railways.herokuapp.com/signin", arg)
    .then(function (response) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      token = response.data.token;
      setName();
    })
    .catch(function (error) {
      console.log(error);
      alert("ログイン失敗。");
    });
  return token;
};

export const postSignUp = (arg) => {
  var token = "";
  axios
    .post("https://api-for-missions-and-railways.herokuapp.com/users", arg)
    .then(function (response) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      token = response.data.token;
      setName();
    })
    .catch(function (error) {
      console.log(error);
      alert("アカウント作成失敗。");
    });
  return token;
};

export const setLogout = () => {
  localStorage.setItem("token", "");
};

export const setName = () => {
  var name = "";
  axios
    .get("https://api-for-missions-and-railways.herokuapp.com/users", {
      headers: { Authorization: "Bearer " + getToken() },
    })
    .then(function (response) {
      console.log(response);
      localStorage.setItem("name", response.data.name);
      name = response.data.name;
    })
    .catch(function (error) {
      console.log(error);
      alert("ユーザー名の取得に失敗しました。");
    });
  return name;
};

export const getName = () => {
  var rawName = localStorage.getItem("name");
  return rawName ? rawName : "";
};
