import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import { connect } from 'react-redux';
import SignUp from '../SignUp';
import Forget from '../Forget';
import './styles.css';
import { getUser } from '../../actions';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper check">
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          </Switch>
        <Forget />
      </div>
    )
  }
}


export default App;
