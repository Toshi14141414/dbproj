import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../style/post.scss";

export class PostDetail extends Component {
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
            <p className="post-detail-time">
              {this.props.value.fname} {this.props.value.lname}
            </p>
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
