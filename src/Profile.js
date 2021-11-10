import axios from "axios";
import React, { useState } from "react";

export const Profile = (props) => {
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
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then(function (response) {
        console.log(response);
        localStorage.setItem("name", form);
        alert("名前を変更しました!");
      })
      .catch(function (error) {
        console.log(error);
        alert("名前の変更に失敗しました。")
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
