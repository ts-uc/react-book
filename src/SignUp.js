import React, { useState } from "react";

export const SignUp = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
    fetch("https://api-for-missions-and-railways.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
          props.setToken(result.token)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
    alert(
      "Form was submitted: \n" +
        "\nname:" +
        form.name +
        "\nemail:" +
        form.email +
        "\npassword:" +
        form.password
    );
    event.preventDefault();
  };

  return (
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
  );
};
