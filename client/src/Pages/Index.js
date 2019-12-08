import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

//style
import "../style/index.scss";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    };

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("email" + this.state.email);
    alert("password" + this.state.password);
    event.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    fetch(`http://localhost:5000/api/login?email=${user.email}&password=${user.password}`)
    .catch(err=> console.error(err))
    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRegisterClick() {
    console.log("register");
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
              <button onClick={this.handleRegisterClick}>Register</button>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default Index;
