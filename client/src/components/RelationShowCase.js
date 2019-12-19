import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import default_user_img from "../default_img/default_user_icon.png";

//style
import "../style/relationShowCase.scss";

class RelationShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      messageTitle: "",
      messageContent: "",
      receiver: this.props.value.friend_id,
      sender: this.props.user
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSendRelationMessage = this.handleSendRelationMessage.bind(this);
  }

  handleSendMessage() {
    this.setState({ showEditor: true });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSendRelationMessage() {
    console.log(this.state.messageTitle + " " + this.state.messageContent);
    fetch(
      `/api/send/friend/message?receiver=${this.state.receiver}&sender=${this.state.sender}&title=${this.state.messageTitle}&content=${this.state.messageContent}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
    window.location.reload();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={2}>
            <img
              src={default_user_img}
              alt="img"
              className="user-showcase-img"
            />
          </Col>
          <Col sm={6}>
            <p className="relaton-detail-name">
              {this.props.value.fname} {this.props.value.lname}
            </p>
            <p>{this.props.descrip}</p>
          </Col>
          <Col sm={2}>
            <button
              className="relaton-detail-button"
              onClick={this.handleSendMessage}
            >
              Send Message
            </button>
          </Col>
        </Row>
        {this.state.showEditor && (
          <Container>
            <Row>
              <p className="message-label">Title: </p>
              <input
                type="text"
                className="message-input-title"
                name="messageTitle"
                value={this.state.messageTitle || ""}
                onChange={this.handleChange}
              ></input>
            </Row>
            <Row>
              <p className="message-label">Content: </p>
              <input
                type="text"
                className="message-input-content"
                name="messageContent"
                value={this.state.messageContent || ""}
                onChange={this.handleChange}
              ></input>
            </Row>
            <Row>
              <button
                onClick={this.handleSendRelationMessage}
                className="message-send"
              >
                Send
              </button>
            </Row>
          </Container>
        )}
      </Container>
    );
  }
}

export default RelationShowCase;
