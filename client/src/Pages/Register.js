import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      address: null,
      sex: "other",
      apt: null,
      city: null,
      state: null,
      zip: null,
      password: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
                ZIP:
                <input
                  type="text"
                  name="zip"
                  className="register"
                  value={this.state.zip || ""}
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

export default Register;
