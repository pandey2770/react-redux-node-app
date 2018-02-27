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
   
  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return null;
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

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App);

class Raper extends Component {
  render() {
    const {user} =this.props;
    return (
      <div className="app-wrapper check">
        <NewApp />
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
          {/* <Route exact path="/" render={() => (
            user ? (
              <Route path="/" component={Home} />
            ) : (
              <Redirect to="/login"/>
          )
        )}/> */}
        </Switch>
        <Forget />
      </div>
    )
  }
}


export default Raper;
