import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import "../style/register.scss";

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
      checkPassword: false,
      latitude: null,
      longitude: null,
      selectedPlace: {},
      activeMarker: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick = (props, marker, e) =>
    this.setState({
      selectedPlace: e,
      activeMarker: marker,
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
      showingInfoWindow: true
    });

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
    event.preventDefault();
    fetch(
      `/api/register?email=${this.state.email}&firstName=${this.state.firstName}&lastName=${this.state.lastName}&sex=${this.state.sex}&latitude=${this.state.latitude}&longitude=${this.state.longitude}&password=${this.state.password}`
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
      <div className="register-form-div">
        <Container>
          <form className="register-form" onSubmit={this.handleSubmit}>
            <Row className="register-row">
              <Col sm={4} className="register-text">
                Email:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="email"
                  className="register-input"
                  value={this.state.email || ""}
                  onChange={this.handleChange}
                ></input>
                {this.state.checkEmail && (
                  <p>Please enter correct email address</p>
                )}
              </Col>
            </Row>
            <Row className="register-row">
              <Col sm={4} className="register-text">
                First Name:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="firstName"
                  className="register-input"
                  value={this.state.firstName || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row>
            <Row className="register-row">
              <Col sm={4} className="register-text">
                Last Name:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="lastName"
                  className="register-input"
                  value={this.state.lastName || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row>
            <Row className="register-row">
              <Col sm={4} className="register-text">
                Gender:
              </Col>
              <Col sm={8}>
                <select
                  name="sex"
                  value={this.state.sex || ""}
                  onChange={this.handleChange}
                >
                  <option value="Other">Other</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Col>
            </Row>
            {/* <Row className="register-row">
              <Col sm={4} className="register-text">
                Address:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="address"
                  className="register-input"
                  value={this.state.address || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row> */}
            <Row className="register-row">
              <Col sm={4} className="register-text">
                Apt:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="apt"
                  className="register-input"
                  value={this.state.apt || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row>
            {/* <Row className="register-row">
              <Col sm={4} className="register-text">
                City:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="city"
                  className="register-input"
                  value={this.state.city || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row>
            <Row className="register-row">
              <Col sm={4} className="register-text">
                State:
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="state"
                  className="register-input"
                  value={this.state.state || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row> */}
            <Row>
              <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{ lat: 40.690871, lng: -73.986116 }}
                style={{ marginTop: "45px", width: "400px", height: "300px" }}
                onClick={this.onMapClick}
              >
                <Marker
                  position={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                  }}
                />
              </Map>
            </Row>
            <Row className="register-row">
              <Col sm={4} className="register-text">
                Password
              </Col>
              <Col sm={8}>
                <input
                  type="text"
                  name="password"
                  className="register-input"
                  value={this.state.password || ""}
                  onChange={this.handleChange}
                ></input>
              </Col>
            </Row>
            <Row className="register-button-row">
              <input
                className="register-button"
                type="submit"
                value="Sign Up"
              />
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

const API = "AIzaSyDWSSP4kcgzwIbkBWqGcQZbXmWcYv3nFN0";

export default GoogleApiWrapper({
  apiKey: API
})(withRouter(Register));
