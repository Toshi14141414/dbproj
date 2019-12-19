import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import default_user_img from "../default_img/default_user_icon.png";

//style
import "../style/relationShowCase.scss";

class RelationShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false
    };
  }

  handleSendMessage() {
    this.setState({ showEditor: true });
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
        {this.state.handleSendMessage}
      </Container>
    );
  }
}

export default RelationShowCase;
