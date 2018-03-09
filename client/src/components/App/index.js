import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import Forget from '../Forget';
import NewPwd from '../NewPwd'
import './styles.css';

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
        <NewPwd />
      </div>
    )
  }
}


export default App;
