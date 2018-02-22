import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import { connect } from 'react-redux';
import SignUp from '../SignUp';
import './styles.css';
import { getUser } from '../../actions';



class App extends Component {
  
  componentWillMount() {
    this.props.getUser();
  }
  render() {
    const {user} =this.props;
    return (
      <div className="app-wrapper">
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route exact path="/Home" render={() => (
            user ? (
              <Route path="/home" component={Home} />
            ) : (
              <Redirect to="/login"/>
          )
        )}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
