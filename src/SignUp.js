import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          props.setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <>
      <h2>Login</h2>
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
      <Link to="/signup">Sign Up</Link>
    </>
  );

  /*
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    axios
      .post("https://api-for-missions-and-railways.herokuapp.com/users", form)
      .then(function (response) {
        console.log(response);
        props.setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            name="name"
            type="text"
            checked={form.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          e-mail:
          <input
            name="email"
            type="text"
            checked={form.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={form.password}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login</Link>
    </>
  );
  */
};
