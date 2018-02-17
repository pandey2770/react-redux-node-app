import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import './styles.css';

const App = () =>
  <div className="app-wrapper">
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" component={Login} />
    </Switch>
  </div>;

export default App;
