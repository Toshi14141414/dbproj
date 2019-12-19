import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

//Customer Components
import { PostDetail } from "../components/PostDetail";

import "../style/post.scss";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thread_id: this.props.location.state.thread_id,
      isReply: false,
      reply: "",
      user: this.props.location.state.user,
      title: "",
      start_time: "",
      messages: []
    };
    this.handleReplyClick = this.handleReplyClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { threadID } = this.props.match.params;
    const subThreadID = threadID.substring(1);
    fetch(`/api/post?thread=${subThreadID}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.thread.title,
          start_time: data.thread.start_time,
          messages: data.messages
        });
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleReplyClick() {
    console.log(this.state.reply);
    fetch(
      `/api/reply?thread=${this.state.thread_id}&user=${this.state.user}&reply=${this.state.reply}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ messages: data.messages, reply: "" });
      })
      .catch(err => console.error(err));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Container fluid className="post-container">
        <Row>
          <p className="post-title">{this.state.title}</p>
        </Row>
        {this.state.messages.map(message => (
          <PostDetail value={message} key={message.mid} />
        ))}
        <Row className="post-reply-row post-input">
          <input
            type="text"
            className="post-reply-input"
            name="reply"
            value={this.state.reply || ""}
            onChange={e => this.handleChange(e)}
          />
        </Row>
        <Row className="post-reply-row post-button">
          <button className="post-reply-button" onClick={this.handleReplyClick}>
            Reply
          </button>
        </Row>
      </Container>
    );
  }
}

export default Post;
