import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg_id: ""
    };
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handleAcceptClick() {
    console.log("accept");
  }

  handleDeclineClick() {
    console.log("decline");
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>{this.props.value.title}</Col>
          <Col sm={3}>
            <button onClick={this.handleAcceptClick}>Accept</button>
          </Col>
          <Col sm={3}>
            <button onClick={this.handleDeclineClick}>Decline</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsDetail;
