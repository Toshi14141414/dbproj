import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RelationShowCase from "../components/RelationShowCase";
import FeedTitle from "../components/FeedTitle";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userName: ""
    };

    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleRelationClick = this.handleRelationClick.bind(this);
  }

  componentDidMount() {
    const { userKey } = this.props.match.params;
    fetch(`/api/home?email=${userKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data });
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleFeedClick(e) {
    const type = e.target.name;
    console.log("trying to get " + type + " feed");
    fetch(`/api/home/feed?type=${type}&user=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data });
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleRelationClick(e) {
    const type = e.target.name;
    console.log("trying to get all " + type + " relationship");
    fetch(`/api/home/relation?type=${type}&user=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data });
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={2}>
            <p>Username</p>
            <button>Edit Profile</button>
            <button>
              News<p>*</p>
            </button>
            <button>Add Feed</button>
            <p>Show user</p>
            <button name="friends" onClick={e => this.handleRelationClick(e)}>
              Friends
            </button>
            <button name="neighbors" onClick={e => this.handleRelationClick(e)}>
              Neighbor
            </button>
            <p>Feeds</p>
            <button name="All" onClick={e => this.handleFeedClick(e)}>
              All
            </button>
            <button name="Friend" onClick={e => this.handleFeedClick(e)}>
              Friends
            </button>
            <button name="Neighbor" onClick={e => this.handleFeedClick(e)}>
              Neighbor
            </button>
            <button name="Block" onClick={e => this.handleFeedClick(e)}>
              Block
            </button>
            <button name="Hood" onClick={e => this.handleFeedClick(e)}>
              Hood
            </button>
          </Col>
          <Col sm={10}>
            <p>Feeds</p>
            <FeedTitle />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
