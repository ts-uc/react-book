import axios from "axios";

export const token = () => {
  var rawToken = localStorage.getItem("token");
  return rawToken ? rawToken : "";
};

export const isLoggedin = () => {
  var rawToken = localStorage.getItem("token");
  return !!rawToken;
};

export const name = () => {
  var rawName = localStorage.getItem("name");
  return rawName ? rawName : "";
};

export const setLogout = () => {
  localStorage.setItem("token", "");
};

export const setName = (token) => {
  var name = ""

  axios
    .get("https://api-for-missions-and-railways.herokuapp.com/users", {
      headers: { Authorization: "Bearer " + token },
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