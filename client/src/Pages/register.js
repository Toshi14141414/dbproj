import React, { Component } from "react";

export class Register extends Component {
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
            Password:
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
