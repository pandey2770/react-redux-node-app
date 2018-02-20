import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;