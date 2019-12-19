import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, EnvelopeOpen } from "styled-icons/fa-regular";

//img
import default_user_img from "../default_img/default_user_icon.png";

//Customer Components
import RelationShowCase from "../components/RelationShowCase";
import NeighborShowCase from "../components/NeighborShowCase";
import FeedTitle from "../components/FeedTitle";
import BlockNewsDetail from "../components/BlockNewsDetail";
import NewsDetail from "../components/NewsDetail";

//style
import "../style/home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      firstName: "",
      lastName: "",
      aid: "",
      apt: "",
      gender: "",
      descrip: "",
      img_path: null,
      bid: null,
      hid: null,
      hasUnreadMSG: false,
      checkDefault: true,
      feeds: [],
      checkFriendRelation: false,
      checkNeighborRelation: false,
      relation: [],
      checkTypeFeeds: false,
      typeFeeds: [],
      checkAddFeed: false,
      addFeedTitle: "",
      addFeedBody: "",
      addFeedType: "AllFriends",
      checkNews: false,
      friendNews: [],
      blockNews: []
    };

    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleFriendRelationClick = this.handleFriendRelationClick.bind(this);
    this.handleNeighborRelationClick = this.handleNeighborRelationClick.bind(
      this
    );
    this.handleAddFeedClick = this.handleAddFeedClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddFeedSubmit = this.handleAddFeedSubmit.bind(this);
    this.handleNewsClick = this.handleNewsClick.bind(this);
  }

  componentDidMount() {
    const { userKey } = this.props.match.params;
    const subUserKey = userKey.substring(1);
    console.log(subUserKey);
    fetch(`/api/home?email=${subUserKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          userEmail: data.email,
          firstName: data.fname,
          lastName: data.lname,
          aid: data.aid,
          apt: data.apt,
          gender: data.gender,
          descrip: data.descrip,
          img_path: data.img_path,
          bid: data.bid,
          hasUnreadMSG: data.hasUnreadMSG,
          feeds: data.feeds
        });
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleFeedClick(e) {
    const type = e.target.name;
    console.log("trying to get " + type + " feed from " + this.state.userEmail);
    fetch(`/api/home/feed?type=${type}&email=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          checkDefault: false,
          checkFriendRelation: false,
          checkNeighborRelation: false,
          checkAddFeed: false,
          checkTypeFeeds: true,
          checkNews: false,
          typeFeeds: data.feeds
        });
      })
      .catch(err => console.error(err));
  }

  handleFriendRelationClick(e) {
    const type = "list_all_friends";
    console.log("trying to get all " + type + " relationship");
    fetch(`/api/home/relation?type=${type}&email=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          checkDefault: false,
          checkTypeFeeds: false,
          checkAddFeed: false,
          checkFriendRelation: true,
          checkNeighborRelation: false,
          checkNews: false,
          relation: data.relation
        });
      })
      .catch(err => console.error(err));
  }

  handleNeighborRelationClick(e) {
    const type = "list_all_neighbors";
    console.log("trying to get all " + type + " relationship");
    fetch(`/api/home/relation?type=${type}&email=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          checkDefault: false,
          checkTypeFeeds: false,
          checkAddFeed: false,
          checkFriendRelation: false,
          checkNeighborRelation: true,
          checkNews: false,
          relation: data.relation
        });
      })
      .catch(err => console.error(err));
  }

  handleAddFeedClick() {
    this.setState({
      checkDefault: false,
      checkTypeFeeds: false,
      checkAddFeed: true,
      checkFriendRelation: false,
      checkNeighborRelation: false,
      checkNews: false
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddFeedSubmit() {
    fetch(
      `/api/addfeed?title=${this.state.addFeedTitle}&type=${this.state.addFeedType}&email=${this.state.userEmail}&body=${this.state.addFeedBody}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  handleNewsClick() {
    this.setState({
      checkDefault: false,
      checkTypeFeeds: false,
      checkAddFeed: false,
      checkRelation: false,
      checkNews: true
    });
    console.log("trying to get news");
    fetch(`/api/news?email=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ friendNews: data.friend, blockNews: data.block });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container fluid className="home-page-container">
        <Row>
          <Col sm={3} className="home-page-left">
            <Container fluid className="home-page-left">
              <Row>
                <img src={default_user_img} className="home-user-img" />
              </Row>
              <Row>
                <p className="home-user-name">
                  {this.state.firstName} {this.state.lastName}
                </p>
              </Row>
              <Row>
                <button className="home-button-green">Edit Profile</button>
              </Row>
              <Row className="home-left-row">
                <button
                  className="home-button-green"
                  onClick={this.handleNewsClick}
                >
                  News
                  {this.state.hasUnreadMSG && (
                    <Envelope
                      width="1.2rem"
                      color="#e96944"
                      style={{ marginLeft: "0.4rem" }}
                    />
                  )}
                  {!this.state.hasUnreadMSG && (
                    <EnvelopeOpen
                      width="1.2rem"
                      color="#fff"
                      style={{ marginLeft: "0.4rem" }}
                    />
                  )}
                </button>
              </Row>
              <Row className="home-left-row">
                <button
                  className="home-button-green"
                  onClick={e => this.handleAddFeedClick(e)}
                >
                  Add Feed
                </button>
              </Row>
              <Row className="home-left-row">
                <p className="home-left-text">Relationship</p>
              </Row>
              <Row>
                <button
                  name="list_all_friends"
                  className="home-button-green"
                  onClick={e => this.handleFriendRelationClick(e)}
                >
                  Friends
                </button>
              </Row>
              <Row className="home-left-row">
                <button
                  name="list_all_neighbors"
                  className="home-button-green"
                  onClick={e => this.handleNeighborRelationClick(e)}
                >
                  Neighbor
                </button>
              </Row>
              <Row>
                <p className="home-left-text">Feeds</p>
              </Row>
              <Row>
                <button
                  name="All"
                  className="home-button-green"
                  onClick={e => this.handleFeedClick(e)}
                >
                  All
                </button>
              </Row>
              <Row className="home-left-row">
                <button
                  name="Friend"
                  className="home-button-green"
                  onClick={e => this.handleFeedClick(e)}
                >
                  Friends
                </button>
              </Row>
              <Row className="home-left-row">
                <button
                  name="Neighbor"
                  className="home-button-green"
                  onClick={e => this.handleFeedClick(e)}
                >
                  Neighbor
                </button>
              </Row>
              <Row className="home-left-row">
                <button
                  name="Block"
                  className="home-button-green"
                  onClick={e => this.handleFeedClick(e)}
                >
                  Block
                </button>
              </Row>
              <Row className="home-left-row">
                <button
                  name="Hood"
                  className="home-button-green"
                  onClick={e => this.handleFeedClick(e)}
                >
                  Hood
                </button>
              </Row>
              <Row className="home-left-row"></Row>
              <Row className="home-left-row"></Row>
              <Row className="home-left-row"></Row>
            </Container>
          </Col>
          <Col sm={9} className="home-right">
            {this.state.checkDefault && (
              <div>
                <p className="home-right-title">All Feeds</p>
                {this.state.feeds.map(feed => (
                  <FeedTitle
                    value={feed}
                    user={this.state.userEmail}
                    key={feed.thread_id}
                  />
                ))}
              </div>
            )}
            {this.state.checkTypeFeeds && (
              <div>
                <p className="home-right-title">Feeds</p>
                {this.state.typeFeeds.map(feed => (
                  <Container>
                    <FeedTitle
                      value={feed}
                      user={this.state.userEmail}
                      key={feed.thread_id}
                    />
                  </Container>
                ))}
              </div>
            )}
            {this.state.checkFriendRelation &&
              this.state.relation.map(relation => (
                <Container>
                  <RelationShowCase
                    value={relation}
                    key={relation.friend_id}
                    user={this.state.userEmail}
                  />
                </Container>
              ))}
            {this.state.checkNeighborRelation &&
              this.state.relation.map(relation => (
                <Container>
                  <NeighborShowCase
                    value={relation}
                    key={relation.friend_id}
                    user={this.state.userEmail}
                  />
                </Container>
              ))}
            {this.state.checkAddFeed && (
              <Container fluid>
                <form onSubmit={this.handleAddFeedSubmit}>
                  <p className="home-right-title">Add New Feed</p>

                  <Row className="add-feed-row">
                    <p className="add-feed-label">Title:</p>
                  </Row>
                  <Row className="add-feed-row">
                    <input
                      type="text"
                      className="add-feed-input-title"
                      name="addFeedTitle"
                      value={this.state.addFeedTitle || ""}
                      onChange={this.handleChange}
                    ></input>
                  </Row>
                  <Row className="add-feed-row">
                    <p className="add-feed-label">Content:</p>
                  </Row>
                  <Row className="add-feed-row">
                    <input
                      type="text"
                      name="addFeedBody"
                      className="add-feed-input-content"
                      value={this.state.addFeedBody || ""}
                      onChange={this.handleChange}
                    ></input>
                  </Row>
                  <Row className="add-feed-row">
                    <select
                      name="addFeedType"
                      className="add-feed-input-select"
                      value={this.state.addFeedType || ""}
                      onChange={this.handleChange}
                    >
                      <option value="AllFriends">All Friends</option>
                      <option value="Block">The Whole Block</option>
                      <option value="Hood">The Whole Hood</option>
                    </select>
                  </Row>
                  <Row className="add-feed-row">
                    <input
                      className="home-button-green"
                      type="submit"
                      value="Submit"
                    />
                  </Row>
                </form>
              </Container>
            )}
            {this.state.checkNews && (
              <div>
                <p className="home-right-title">News</p>
                {this.state.friendNews.map(news => (
                  <Container>
                    <NewsDetail
                      key={news.thread_id}
                      value={news}
                      userEmail={this.state.userEmail}
                    />
                  </Container>
                ))}
                {this.state.blockNews.map(news => (
                  <Container>
                    <BlockNewsDetail
                      key={news.thread_id}
                      value={news}
                      userEmail={this.state.userEmail}
                    />
                  </Container>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
