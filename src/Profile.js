import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

export const Profile = (props) => {
  const [error, setError] = useState("");
  const [form, setForm] = useState("");

  useEffect(() => {
    axios
      .get("https://api-for-missions-and-railways.herokuapp.com/users", {
        headers: { Authorization: "Bearer " + props.token },
      })
      .then(function (response) {
        console.log(response);
        setForm(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  }, [props.token]);

  const handleChange = (event) => {
    setForm(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .put(
        "https://api-for-missions-and-railways.herokuapp.com/users",
        { name: form },
        {
          headers: { Authorization: "Bearer " + props.token },
        }
      )
      .then(function (response) {
        console.log(response);
        alert("Change was submitted!");
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
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
