import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

//style
import "../style/index.scss";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      response: ""
    };

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getLoginResponse() {
    fetch("/api/login", { method: "GET" })
      .then(response => {
        console.log(response);
        console.log("text");
        console.log(response.text());
      })
      .then(function(data) {
        const items = data;
        console.log("items" + items);
        console.log(items);
      })
      .catch(err => console.error(err));
  }

  handleSubmit(event) {
    // alert("email" + this.state.email);
    // alert("password" + this.state.password);
    event.preventDefault();
    fetch(
      `/api/login?email=${this.state.email}&password=${this.state.password}`
    )
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    this.getLoginResponse();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRegisterClick() {
    this.props.history.push("/register");
  }

  render() {
    return (
      <div className="login-form">
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Row>
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
            </Row>
            <Row>
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
            </Row>
            <Row>
              <input type="submit" value="Sign In" />
            </Row>
          </form>
          <button onClick={this.handleRegisterClick}>Register</button>
        </Container>
      </div>
    );
  }
}

export default withRouter(Index);
