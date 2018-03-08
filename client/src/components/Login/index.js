import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, show } from '../../actions';
import Header from '../Header';

class Login extends Component {
  state = {
    username: '',
    password: '',
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

  login = () => {
    const { loginUser, history } = this.props;
    const { username, password } = this.state;
    loginUser(username, password, history);
  };

  show = () => {
    this.props.show()
  }
  render () {
    const { history, location } = this.props;    
    const { username ,password, error } = this.state;
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
                  <input 
                  type="email" 
                  className={error} 
                  name="username" 
                  placeholder="Email" 
                  value={username}  
                  onChange={this.change}/>
                </div>
                <div className="form-group">
                  <input 
                  type="password" 
                  className={error} 
                  name="password" 
                  placeholder="password" 
                  value={password}  
                  onChange={this.change}/>
                </div>
                {error !=='className'?
            null
            :
            <span>UserNmae or Password is Incorrect</span>}
              </div>
                <input type="button" value="login" onClick={this.login} className="login-button" />
            </div>
            <div className="etc-login-form">
                <p onClick={this.show} className='forget'>Froget Password</p>
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
    error:state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (username, password, history) =>
      dispatch(loginUser(username, password, history)),
      show: () => dispatch(show())
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Login);