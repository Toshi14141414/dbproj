import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  ButtonToolbar,
  Popover,
  Button
} from "react-bootstrap";

import "../style/post.scss";

export class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: this.props.value.email,
      user: this.props.user
    };
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  handleAddFriend() {
    console.log(this.state.user + " " + this.state.sender);
    fetch(
      `/api/add/friend?user=${this.state.user}&receiver=${this.state.sender}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container className="post-detail-container">
        <Row>
          <Col>
            <p className="post-detail-text">{this.props.value.body}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Content>
                    <button
                      className="post-reply-button"
                      onClick={this.handleAddFriend}
                    >
                      Add Friend
                    </button>
                  </Popover.Content>
                </Popover>
              }
            >
              <button className="post-detail-name">
                {this.props.value.fname} {this.props.value.lname}
              </button>
            </OverlayTrigger>
          </Col>
          <Col sm={9}>
            <p className="post-detail-time">
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
