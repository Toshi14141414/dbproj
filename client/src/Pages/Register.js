import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      address: null,
      apt: null,
      city: null,
      state: null,
      zip: null,
      password: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              className="login-email"
              value={this.state.email || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            First Name:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          Male/Female
          <label>
            Address:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Apt:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            City:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            State:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            ZIP:
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              className="login-password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            ></input>
          </label>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default Register;
