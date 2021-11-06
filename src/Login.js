import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

export const Login = (props) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      axios
        .post(
          "https://api-for-missions-and-railways.herokuapp.com/signin",
          values
        )
        .then(function (response) {
          console.log(response);
          props.setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        })
        .catch(function (error) {
          console.log(error);
          alert("ログイン失敗。");
        });
    },
  });

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
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
      <Link to="/signup">Sign Up</Link>
    </>
  );
};
