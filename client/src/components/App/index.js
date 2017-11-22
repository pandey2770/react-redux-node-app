import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Task from '../Task';

import './styles.css';

const App = () =>
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route path="/Task" component={Task} />
      <Route path="/" component={Home} />
    </Switch>
  </div>;

export default App;
