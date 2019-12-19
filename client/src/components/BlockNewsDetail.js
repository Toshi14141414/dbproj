import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class BlockNewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: this.props.userEmail,
      senderEmail: this.props.value.sender_id,
      targetBid: this.props.value.target_bid,
      time: this.props.value.start_time
    };
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handleAcceptClick() {
    console.log("block accept");
    fetch(
      `/api/news/block/back?sender=${this.state.senderEmail}&user=${this.state.userEmail}&type=APPROVED&target=${this.state.targetBid}&time=${this.state.time}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleDeclineClick() {
    console.log("block decline");
    fetch(
      `/api/news/block/back?sender=${this.state.senderEmail}&user=${this.state.userEmail}&type=REJECT&target=${this.state.targetBid}&time=${this.state.time}`
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

export default BlockNewsDetail;
