import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

//import pages
import Index from "./Pages/Index";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/Register">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
