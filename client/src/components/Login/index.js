import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import Header from '../Header';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  change = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  login = () => {
    const { loginUser, history } = this.props;
    const { username, password } = this.state;
    loginUser(username, password, history);
  };


  render () {
    const { history, location } = this.props;    
    const { username ,password } = this.state;
    return (
      <div>
        <Header history={history} location={location} />
        <div className="text-center">
          <div className="logo">
            login
          </div>
          <div className="login-form-1">
            <div className="main-login-form">
              <div className="login-group">
                <div className="form-group">
                  <input type="text" className="form-control" name="username" placeholder="username" value={username}  onChange={this.change}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="password" value={password}  onChange={this.change}/>
                </div>
              </div>
                <input type="button" value="login" onClick={this.login} className="login-button" />
            </div>
            <div className="etc-login-form">
              <p>forgot your password?</p>
              <Link to="/signUp">
              <p>new user? </p>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}  

function mapStateToprpos(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (username, password, history) =>
      dispatch(loginUser(username, password, history))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Login);