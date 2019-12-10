import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class FeedTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thread_id: this.props.value.thread_id,
      user: this.props.user
    };
    this.handleGoPost = this.handleGoPost.bind(this);
  }

  handleGoPost() {
    this.props.history.push({
      pathname: `/post:${this.state.thread_id}`,
      state: { thread_id: this.state.thread_id, user: this.state.user }
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <button onClick={this.handleGoPost}>
              {this.props.value.title}
            </button>
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

export default withRouter(FeedTitle);
