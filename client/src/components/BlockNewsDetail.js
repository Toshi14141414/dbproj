import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class BlockNewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: this.props.userEmail,
      senderEmail: this.props.value.sender_id,
      targetBid: this.props.value.target_bid,
      time: this.props.value.start_time,
      isReply: true
    };
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handleAcceptClick() {
    console.log("block accept");
    this.setState({ isReply: false });
    fetch(
      `/api/news/block/back?sender=${this.state.senderEmail}&user=${this.state.userEmail}&type=APPROVE&target=${this.state.targetBid}&time=${this.state.time}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleDeclineClick() {
    console.log("block decline");
    this.setState({ isReply: false });
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
      <Container className="news-container">
        {this.state.isReply && (
          <div>
            <Row>
              <Col sm={6}>
                <p className="news-title">{this.props.value.title}</p>
              </Col>
              <Col sm={3}>
                <button
                  className="news-button"
                  onClick={this.handleAcceptClick}
                >
                  Accept
                </button>
              </Col>
              <Col sm={3}>
                <button
                  className="news-button"
                  onClick={this.handleDeclineClick}
                >
                  Decline
                </button>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    );
  }
}

export default BlockNewsDetail;
