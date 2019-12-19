import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg_id: "",
      userEmail: this.props.userEmail,
      senderEmail: this.props.value.sender_id
    };
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handleAcceptClick() {
    console.log("accept");
    fetch(
      `/api/news/friend/back?sender=${this.state.senderEmail}&user=${this.state.userEmail}&type=APPROVED`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleDeclineClick() {
    console.log("decline");
    fetch(
      `/api/news/friend/back?sender=${this.state.senderEmail}&user=${this.state.userEmail}&type=REJECT`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
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
