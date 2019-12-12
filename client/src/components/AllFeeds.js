import React, { Component } from "react";

//customer components
import FeedTitle from "./FeedTitle";

class AllFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: this.props.value,
      userEmail: this.props.user
    };
  }

  render() {
    return (
      <div>
        {this.state.feeds.map(feed => (
          <FeedTitle
            value={feed}
            user={this.state.userEmail}
            key={feed.thread_id}
          />
        ))}
      </div>
    );
  }
}

export default AllFeeds;
