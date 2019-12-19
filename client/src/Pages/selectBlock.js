import React, { Component } from "react";

class selectBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user
    };
  }

  render() {
    return <div>Select your Block:</div>;
  }
}

export default selectBlock;
