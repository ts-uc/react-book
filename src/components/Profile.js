import axios from "axios";
import React, { useContext, useState } from "react";
import { TokenContext } from "../App";

export const Profile = (props) => {
  const { token } = useContext(TokenContext);

  const [form, setForm] = useState(localStorage.getItem("name"));

  const handleChange = (event) => {
    setForm(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .put(
        "https://api-for-missions-and-railways.herokuapp.com/users",
        { name: form },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then(function (response) {
        console.log(response);
        localStorage.setItem("name", form);
        alert("名前を変更しました!");
      })
      .catch(function (error) {
        console.log(error);
        alert("名前の変更に失敗しました。");
      });
    event.preventDefault();
  };

  return (
    <>
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          Name:
          <input type="text" value={form} onChange={handleChange} />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
