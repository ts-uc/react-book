import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: \n" +
        "email:" +
        this.state.email +
        "password:" +
        this.state.password
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          e-mail:
          <input
            name="email"
            type="text"
            checked={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
