import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import default_user_img from "../default_img/default_user_icon.png";

//style
import "../style/relationShowCase.scss";

class RelationShowCase extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <img
              src={default_user_img}
              alt="img"
              className="user-showcase-img"
            />
          </Col>
          <Col sm={8}>
            <p>
              {this.props.value.fname} {this.props.value.lname}
            </p>
            <p>{this.props.descrip}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RelationShowCase;
