import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { setName } from "../User.js";

export const SignUp = (props) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: (values) => {
      axios
        .post(
          "https://api-for-missions-and-railways.herokuapp.com/users",
          values
        )
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          setName(response.data.token);
          props.setToken(response.data.token);
        })
        .catch(function (error) {
          console.log(error);
          alert("アカウント作成失敗。");
        });
    },
  });

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <br />
        <label>
          e-mail:
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};
