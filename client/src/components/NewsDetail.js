import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../style/news.scss";

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
      <Container className="news-container">
        <Row>
          <Col sm={6}>
            <p className="news-title">{this.props.value.title}</p>
          </Col>
          <Col sm={3}>
            <button className="news-button" onClick={this.handleAcceptClick}>
              Accept
            </button>
          </Col>
          <Col sm={3}>
            <button className="news-button" onClick={this.handleDeclineClick}>
              Decline
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsDetail;
