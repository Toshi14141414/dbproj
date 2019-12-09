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
      typeFeeds: []
    };

    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleRelationClick = this.handleRelationClick.bind(this);
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
          checkRelation: true,
          relation: data.relation
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={2} className="home-page-left">
            <img src={default_user_img} className="home-user-img" />
            <p className="home-user-name">
              {this.state.firstName} {this.state.lastName}
            </p>
            <button className="home-edit-profile">Edit Profile</button>
            <button>News</button>
            {this.state.hasUnreadMSG && <Envelope width="1.8rem" />}
            {!this.state.hasUnreadMSG && <EnvelopeOpen />}
            <button>Add Feed</button>
            <p>Show user</p>
            <button
              name="list_all_friends"
              onClick={e => this.handleRelationClick(e)}
            >
              Friends
            </button>
            <button
              name="list_all_neighbors"
              onClick={e => this.handleRelationClick(e)}
            >
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
            {this.state.checkDefault &&
              this.state.feeds.map(feed => (
                <FeedTitle value={feed} key={feed.thread_id} />
              ))}
            {this.state.checkTypeFeeds &&
              this.state.typeFeeds.map(feed => (
                <FeedTitle value={feed} key={feed.thread_id} />
              ))}
            {this.state.checkRelation &&
              this.state.relation.map(relation => (
                <RelationShowCase value={relation} key={relation.friend_id} />
              ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
