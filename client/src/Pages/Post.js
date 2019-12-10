import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

//Customer Components
import { PostDetail } from "../components/PostDetail";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thread_id: this.props.location.state.thread_id,
      reply: "",
      user: this.props.location.state.user
    };
    this.handleReplyClick = this.handleReplyClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { threadID } = this.props.match.params;
    const subThreadID = threadID.substring(1);
    console.log(subThreadID);
    fetch(`/api/post?thread=${subThreadID}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleReplyClick() {
    console.log(this.state.reply);
    fetch(
      `/api/reply/thread?=${this.state.thread_id}&user=${this.state.user}&reply=${this.state.reply}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
      <Container>
        <Row>
          <p>Title</p>
        </Row>
        <PostDetail />
        <input
          type="text"
          name="reply"
          value={this.state.reply || ""}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.handleReplyClick}>Reply</button>
      </Container>
    );
  }
}

export default Post;
