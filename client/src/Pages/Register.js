import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import "../style/register.scss";

require("dotenv").config();

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
      result: true,
      city: null,
      checkCity: false,
      state: null,
      checkState: false,
      password: null,
      checkPassword: false,
      latitude: null,
      longitude: null,
      selectedPlace: {},
      activeMarker: {},
      suggestBlocks: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
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

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      this.setState({ checkEmail: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.checkEmail) {
      alert("Please enter correct email address");
    } else {
      fetch(
        `/api/register?email=${this.state.email}&firstName=${this.state.firstName}&lastName=${this.state.lastName}&sex=${this.state.sex}&latitude=${this.state.latitude}&longitude=${this.state.longitude}&password=${this.state.password}`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data.suggested_blocks);
          this.setState({
            result: data.result,
            suggestBlocks: data.suggested_blocks
          });
          if (!data.result) {
            alert("Register Failer, Please try another email");
          } else {
            this.props.history.push({
              pathname: `/selectBlock`,
              state: { user: this.state.email, blocks: data.suggested_blocks }
            });
          }
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="register-form-div">
        <Container className="register-form-container">
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
                onChange={this.handleEmailChange}
              ></input>
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
          <Row className="register-row">
            <Col sm={4} className="register-text">
              Password
            </Col>
            <Col sm={8}>
              <input
                type="password"
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
              onClick={e => this.handleSubmit(e)}
            />
          </Row>

          <Row>
            <Map
              google={this.props.google}
              zoom={14}
              initialCenter={{ lat: 40.690871, lng: -73.986116 }}
              style={{
                marginTop: "10px",
                marginLeft: "35px",
                width: "400px",
                height: "300px"
              }}
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
        </Container>
      </div>
    );
  }
}

const API = process.env.REACT_APP_GOOGLE_MAP_API;

export default GoogleApiWrapper({
  apiKey: API
})(withRouter(Register));
