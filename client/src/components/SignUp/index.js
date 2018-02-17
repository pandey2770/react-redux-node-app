import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions';


class SignUp extends Component {
  state = {
    username: '',
    name:'',
    password: '',
    confirmPassword: ''
  };

  change = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };


  signUp = () => {
    const { username, name ,password, confirmPassword } = this.state;
    const { history } = this.props;
    if (username === '') {
      alert('Please enter the right Email.');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    return this.props.signUp(history, username, name,password);
  };


  render () {
    const { username, name ,password, confirmPassword } = this.state;    
    const { history, location } = this.props;    
    return (
      <div className="text-center">
          <div className="logo">SignUp</div>
            <div className="login-form-1">
              <form className="text-left">
                <div className="login-form-main-message"></div>
                <div className="main-login-form">
                  <div className="login-group">
                  <div className="form-group">
                      <label for="lg_username" className="sr-only">Name</label>
                      <input type="text" className="form-control" name="name" placeholder="name" value={name}  onChange={this.change}/>
                    </div>
                    <div className="form-group">
                      <label for="lg_username" className="sr-only">Username</label>
                      <input type="text" className="form-control" name="username" placeholder="Email" value={username}  onChange={this.change}/>
                    </div>
                    <div className="form-group">
                      <label for="lg_password" className="sr-only">Password</label>
                      <input type="password" className="form-control" name="password" placeholder="password" value={password} onChange={this.change}/>
                    </div>
                    <div className="form-group">
                      <label for="lg_password" className="sr-only">Confirm Password</label>
                      <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={this.change}/>
                    </div>
                  </div>
                  <input type="button" value="SignUp" onClick={this.signUp} className="login-button" />
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


function mapDispatchToProps(dispatch) {
  return {
    signUp: (username, name, password, history) =>
      dispatch(signUp(username, name,password, history))
  };
}

export default connect(undefined, mapDispatchToProps)(SignUp);
