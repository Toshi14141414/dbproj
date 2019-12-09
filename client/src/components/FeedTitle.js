import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FeedTitle extends Component {
  constructor(props) {
    super(props);
    this;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <p>{this.props.value.title}</p>
          </Col>
          <Col sm={2}>
            <p>
              {this.props.value.fname} {this.props.value.lname}
            </p>
          </Col>
          <Col sm={4}>
            <p>{this.props.value.start_date.substring(0, 10)}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FeedTitle;
