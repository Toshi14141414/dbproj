import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class PostDetail extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>{this.props.value}Detail</p>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <p>{this.props.value}user</p>
          </Col>
          <Col sm={9}>
            <p>{this.props.value}time</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostDetail;
