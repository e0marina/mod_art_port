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
        <Route exact path="/people" component={People} />
        <Route exact path="/animals" component={Animals} />
      </Switch>
    </Router>
  );
}

export default App;
