import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, EnvelopeOpen } from "styled-icons/fa-regular";

//img
import default_user_img from "../default_img/default_user_icon.png";

//Customer Components
import RelationShowCase from "../components/RelationShowCase";
import FeedTitle from "../components/FeedTitle";

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
      checkRelation: false,
      relation: [],
      checkTypeFeeds: false,
      typeFeeds: [],
      checkAddFeed: false,
      addFeedTitle: "",
      addFeedBody: "",
      addFeedType: "AllFriends"
    };

    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleRelationClick = this.handleRelationClick.bind(this);
    this.handleAddFeedClick = this.handleAddFeedClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddFeedSubmit = this.handleAddFeedSubmit.bind(this);
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
          checkRelation: false,
          checkAddFeed: false,
          checkTypeFeeds: true,
          typeFeeds: data.feeds
        });
      })
      .catch(err => console.error(err));
  }

  handleRelationClick(e) {
    const type = e.target.name;
    console.log("trying to get all " + type + " relationship");
    fetch(`/api/home/relation?type=${type}&email=${this.state.userEmail}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          checkDefault: false,
          checkTypeFeeds: false,
          checkAddFeed: false,
          checkRelation: true,
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
      checkRelation: false
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
                <button className="home-button-green">
                  News{"  "}{" "}
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
                  onClick={e => this.handleRelationClick(e)}
                >
                  Friends
                </button>
              </Row>
              <Row>
                <button
                  name="list_all_neighbors"
                  onClick={e => this.handleRelationClick(e)}
                >
                  Neighbor
                </button>
              </Row>
              <Row>
                <p className="home-left-text">Feeds</p>
              </Row>
              <Row>
                <button name="All" onClick={e => this.handleFeedClick(e)}>
                  All
                </button>
              </Row>
              <Row>
                <button name="Friend" onClick={e => this.handleFeedClick(e)}>
                  Friends
                </button>
              </Row>
              <Row>
                <button name="Neighbor" onClick={e => this.handleFeedClick(e)}>
                  Neighbor
                </button>
              </Row>
              <Row>
                <button name="Block" onClick={e => this.handleFeedClick(e)}>
                  Block
                </button>
              </Row>
              <Row>
                <button name="Hood" onClick={e => this.handleFeedClick(e)}>
                  Hood
                </button>
              </Row>
            </Container>
          </Col>
          <Col sm={9}>
            <p>Feeds</p>
            {this.state.checkDefault &&
              this.state.feeds.map(feed => (
                <FeedTitle
                  value={feed}
                  user={this.state.userEmail}
                  key={feed.thread_id}
                />
              ))}
            {this.state.checkTypeFeeds &&
              this.state.typeFeeds.map(feed => (
                <FeedTitle
                  value={feed}
                  user={this.state.userEmail}
                  key={feed.thread_id}
                />
              ))}
            {this.state.checkRelation &&
              this.state.relation.map(relation => (
                <RelationShowCase value={relation} key={relation.friend_id} />
              ))}
            {this.state.checkAddFeed && (
              <form onSubmit={this.handleAddFeedSubmit}>
                <label>
                  Title:
                  <input
                    type="text"
                    name="addFeedTitle"
                    value={this.state.addFeedTitle || ""}
                    onChange={this.handleChange}
                  ></input>
                </label>
                <label>
                  Content:
                  <input
                    type="text"
                    name="addFeedBody"
                    value={this.state.addFeedBody || ""}
                    onChange={this.handleChange}
                  ></input>
                </label>
                <select
                  name="addFeedType"
                  value={this.state.addFeedType || ""}
                  onChange={this.handleChange}
                >
                  <option value="AllFriends">All Friends</option>
                  <option value="Block">The Whole Block</option>
                  <option value="Hood">The Whole Hood</option>
                </select>
                <input type="submit" value="Submit" />
              </form>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
