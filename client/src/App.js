import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import People from "./pages/people";
import Animals from "./pages/animals";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:topicPath" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
