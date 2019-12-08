import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

//import pages
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
