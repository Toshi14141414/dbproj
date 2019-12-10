import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class PostDetail extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>{this.props.value.body}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <p>
              {this.props.value.fname} {this.props.value.lname}
            </p>
          </Col>
          <Col sm={9}>
            <p>
              {this.props.value.send_time.substring(0, 10)}{" "}
              {this.props.value.send_time.substring(11, 19)}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostDetail;
