import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      checkEmail: false,
      firstName: null,
      checkFirstName: false,
      lastName: null,
      checkLastName: false,
      address: null,
      checkAddress: false,
      sex: "other",
      apt: null,
      city: null,
      checkCity: false,
      state: null,
      checkState: false,
      password: null,
      checkPassword: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleEmailChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  //   // if (
  //   //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
  //   // ) {
  //   //   console.log("email correct");
  //   //   // this.setState({ email: inputEmail });
  //   // } else {
  //   //   // this.setState({ checkEmail: !this.state.checkEmail });
  //   //   console.log("your email address is wrong");
  //   // }
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  registerResponse() {
    if (!this.state.result) {
      alert("Register Failer, Please try another email");
    } else {
      alert("Register success");
      this.props.history.push("/home");
    }
  }

  handleSubmit(event) {
    // alert("email" + this.state.email);
    // alert("password" + this.state.password);
    event.preventDefault();
    fetch(
      `/api/register?email=${this.state.email}&firstName=${this.state.firstName}&lastName=${this.state.lastName}&sex=${this.state.sex}&address=${this.state.address}&apt=${this.state.apt}&city=${this.state.city}&state=${this.state.state}&zip=${this.state.zip}&password=${this.state.password}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data.result });
        console.log(data.result);
        this.registerResponse();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  className="register"
                  value={this.state.email || ""}
                  onChange={this.handleChange}
                ></input>
                {this.state.checkEmail && (
                  <p>Please enter correct email address</p>
                )}
              </label>
            </Row>
            <Row>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  className="register"
                  value={this.state.firstName || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <Row>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  className="register"
                  value={this.state.lastName || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <Row>
              <select
                name="sex"
                value={this.state.sex || ""}
                onChange={this.handleChange}
              >
                <option value="Other">Other</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Row>
            <Row>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  className="register"
                  value={this.state.address || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <Row>
              <label>
                Apt:
                <input
                  type="text"
                  name="apt"
                  className="register"
                  value={this.state.apt || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <Row>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  className="register"
                  value={this.state.city || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <Row>
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  className="register"
                  value={this.state.state || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <Row>
              <label>
                Password
                <input
                  type="text"
                  name="password"
                  className="register"
                  value={this.state.password || ""}
                  onChange={this.handleChange}
                ></input>
              </label>
            </Row>
            <input type="submit" value="Sign Up" />
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Register);
