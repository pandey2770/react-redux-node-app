import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render () {
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
                      <input type="text" className="form-control" name="lg_username" placeholder="username" />
                    </div>
                    <div className="form-group">
                      <label for="lg_password" className="sr-only">Password</label>
                      <input type="password" className="form-control" name="lg_password" placeholder="password" />
                    </div>
                  </div>
                  <button type="submit" className="login-button">Login</button>
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

export default Login;