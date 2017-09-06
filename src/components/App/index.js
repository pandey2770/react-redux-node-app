import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Views from '../Views';

import './styles.css';

const App = () =>
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/Views" component={Views} />
    </Switch>
  </div>;

export default App;
