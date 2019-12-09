import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: ""
    };
  }

  componentDidMount() {
    const { userKey } = this.props.match.params;
    //this.setState({ useremail: userKey.toString().substring(1) });
    fetch(`/api/home?email=${userKey.toString().substring(1)}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data });
        console.log(data);
      })
      .catch(err => console.error(err));
  }
  
  render() {
    return <div>This is Home</div>;
  }
}

export default Home;
