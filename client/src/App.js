import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AdminLogin from './pages/adminLogin';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin-login' component={AdminLogin} />
        <Route path='/:topicPath' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
