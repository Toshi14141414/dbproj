import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

//style
import "../style/index.scss";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      result: 0
    };

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loginResponse() {
    if (!this.state.result) {
      alert("login failed");
    } else {
      alert("login success");
      this.props.history.push(`/home:${this.state.email}`);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `/api/login?email=${this.state.email}&password=${this.state.password}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data[0].result });
        console.log(data[0].result);
        this.loginResponse();
      })
      .catch(err => console.error(err));
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
      <div className="login-form-div">
        <Container className="login-form">
          <form onSubmit={this.handleSubmit}>
            <Row>
              <label>
                <Col sm={3}>
                  <span className="login-text">Email:</span>
                </Col>
                <Col sm={6}>
                  <input
                    type="text"
                    name="email"
                    className="login-input"
                    value={this.state.email || ""}
                    onChange={this.handleChange}
                  ></input>
                </Col>
              </label>
            </Row>
            <Row>
              <label>
                <Col sm={3}>
                  <span className="login-text">Password:</span>
                </Col>
                <Col sm={9}>
                  <input
                    type="password"
                    name="password"
                    className="login-input"
                    value={this.state.password || ""}
                    onChange={this.handleChange}
                  ></input>
                </Col>
              </label>
            </Row>
            <Row className="blank-row"></Row>
            <Row>
              <Col sm={6}>
                <input type="submit" value="Sign In" className="login-button" />
              </Col>
              <Col sm={6}>
                <button
                  onClick={this.handleRegisterClick}
                  className="login-button"
                >
                  Register
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Index);
