import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

//import pages
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Post from "./Pages/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/home:userKey" component={Home} />
        <Route exact path="/post:threadID" component={Post} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
