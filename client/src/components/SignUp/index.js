import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render () {
    return (
      <div className="text-center">
          <div className="logo">SignUp</div>
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
                      <label for="lg_username" className="sr-only">Confirm Username</label>
                      <input type="text" className="form-control" name="lg_username" placeholder="Confirm Username" />
                    </div>
                    <div className="form-group">
                      <label for="lg_password" className="sr-only">Password</label>
                      <input type="password" className="form-control" name="lg_password" placeholder="password" />
                    </div>
                    <div className="form-group">
                      <label for="lg_password" className="sr-only">Confirm Password</label>
                      <input type="password" className="form-control" name="lg_password" placeholder="Confirm Password" />
                    </div>
                  </div>
                  <button type="submit" className="login-button">SignUp</button>
                </div>
                <div className="etc-login-form">
                  <Link to="/">
                    <p>Already user? </p>
                  </Link> 
                </div>
              </form>
            </div>
        </div>
    )
  }
}  

export default SignUp;