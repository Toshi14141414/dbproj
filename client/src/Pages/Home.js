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
    console.log(userKey.toString().substring(1));
    this.setState({ useremail: userKey.toString().substring(1) });
  }

  userHomeInfo(event) {
    // alert("email" + this.state.email);
    // alert("password" + this.state.password);
    event.preventDefault();
    fetch(`/api/home?email=${this.state.useremail}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data });
        console.log(data);
        this.loginResponse();
      })
      .catch(err => console.error(err));
  }

  render() {
    return <div>This is Home</div>;
  }
}

export default Home;
