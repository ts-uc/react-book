import React, { useState } from "react";

export const Login = () => {
  const [form, setForm] = useState({
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
    alert(
      "Form was submitted: \n" +
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
