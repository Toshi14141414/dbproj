import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FeedTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedInfo: ""
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <p>{this.props.value}Subject</p>
          </Col>
          <Col sm={2}>
            <p>{this.props.value}User</p>
          </Col>
          <Col sm={2}>
            <p>{this.props.value}Date</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FeedTitle;
