import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

//import pages
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Post from "./Pages/Post";
import selectBlock from "./Pages/selectBlock";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/home:userKey" component={Home} />
        <Route exact path="/post:threadID" component={Post} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/selectBlock" component={selectBlock} />
      </Switch>
    </Router>
  );
}

export default App;
