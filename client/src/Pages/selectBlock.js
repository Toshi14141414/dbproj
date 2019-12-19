import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../style/selectBlock.scss";

class selectBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user,
      blocks: this.props.location.state.blocks
    };
  }

  handleAddBlock(e) {
    const blockID = e.target.value;
    console.log(blockID + this.state.user);
    fetch(`/api/join/block?block=${blockID}&email=${this.state.user}`)
      .then(res => res.json())
      .then(data => {})
      .catch(err => console.error(err));
    this.props.history.push({
      pathname: `/Home:${this.state.user}`,
      state: { user: this.state.user }
    });
  }

  render() {
    return (
      <div className="select-block-div">
        <Container>
          <Row>
            <p>Select your Block:</p>
          </Row>
          {this.state.blocks.map(block => (
            <Row>
              <button
                key={block.bid}
                value={block.bid}
                onClick={e => this.handleAddBlock(e)}
              >
                {block.bname}
              </button>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default selectBlock;
