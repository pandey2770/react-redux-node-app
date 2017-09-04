import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Views from './components/Views';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/Views" component={Views} />
        </Switch>
      </div>
    );
  }
}

export default App;