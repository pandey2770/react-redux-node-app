import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

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
        <div className="text-center">
          <div className="logo">login</div>
            <div className="login-form-1">
              <form className="text-left">
                <div className="login-form-main-message"></div>
                <div className="main-login-form">
                  <div className="login-group">
                    <div className="form-group">
                      <label for="lg_username" className="sr-only">Username</label>
                      <input type="text" className="form-control" name="username" placeholder="username" value={username}  onChange={this.change}/>
                    </div>
                    <div className="form-group">
                      <label for="lg_password" className="sr-only">Password</label>
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
              </form>
            </div>
        </div>
    )
  }
}  


function mapDispatchToProps(dispatch) {
  return {
    loginUser: (username, password, history) =>
      dispatch(loginUser(username, password, history))
  };
}

export default connect(undefined, mapDispatchToProps)(Login);