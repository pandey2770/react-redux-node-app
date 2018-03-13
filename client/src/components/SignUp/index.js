import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import Header from '../Header';


class SignUp extends Component {
  state = {
    username: '',
    name:'',
    password: '',
    confirmPassword: '',
    error:'form-control'    
  };

  componentWillReceiveProps(nextProps){
    const {error} = nextProps;
    if(error[0]==='className'){
      this.setState({
        error: error[0]
      });
    }
  }

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
    const { username, name ,password, confirmPassword, error } = this.state;    
    const { history, location } = this.props;    
    return (
      <div>
        <Header history={history} location={location} />
        <div className="text-center">
          <div className="logo">SignUp</div>
            <div className="login-form-1">
              <div className="main-login-form">
                <div className="login-group">
                  <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="name" 
                    value={name}  
                    onChange={this.change}/>
                  </div>
                  <div className="form-group">
                    <input 
                    type="email" 
                    className={error}
                    name="username" 
                    placeholder="Email" 
                    value={username}  
                    onChange={this.change}/>
                  </div>
                  {error !=='className'?
                    null
                  :
                    <span>Email Already Exists</span>}
                  <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={this.change}/>
                  </div>
                  <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={this.change}/>
                  </div>
                </div>
                  <input 
                  type="button" 
                  value="SignUp" 
                  onClick={this.signUp} 
                  className="login-button" />
              </div>
              <div className="etc-login-form">
                <Link to="/login">
                  <p>Already user? </p>
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
    error:state.error,    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (username, name, password, history) =>
      dispatch(signUp(username, name,password, history))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(SignUp);
