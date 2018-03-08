import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../../actions';

class newPwd extends Component {
  state = {
    password:'',
    confirmPassword:'',
    error:'form-control'
  };

  send = () => {
    const { confirmPassword, password } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        error:'className'
      })
      return false;
    }
    return this.props.
  }

  updateInput = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };


  render() {
    const { password, error,confirmPassword } = this.state;    
    if (!this.props.popUp) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <h2 className="center-center">New Password</h2>
          <form>
            <div className="form-group">
              <input
                type="password"
                onChange={this.updateInput}
                className={error} 
                placeholder="Password"
                value={password}
                name='password'
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={this.updateInput}
                className={error} 
                placeholder="confirm Password"
                value={confirmPassword}
                name='confirmPassword'
              />
            </div>
            <div className="button-style">
              <input
                type="button"
                value="send"
                onClick={this.send}
                className="btn button btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}


function mapStateToprpos(state) {
  return {
    popUp:state.popUp.showPassword,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(newPwd);