import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send, verify } from '../../actions';

class newPwd extends Component {
  state = {
    email: '',
    otp:'',
    error:false,    
  };


  componentWillReceiveProps(nextProps){
    const {error} = nextProps;
    if(error[0]==='error'){
      this.setState({
        error: true
      });
    }
  }


  send = () => {
    const { email, otp } = this.state;
    this.props.verify(email,otp);    
  }

  updateInput = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };


  render() {
    const { email, otp, error } = this.state;    
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
                type="email"
                onChange={this.updateInput}
                className='form-control'
                placeholder="Email"
                value={email}
                name='email'
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={this.updateInput}
                className='form-control'
                placeholder="OTP"
                value={otp}
                name='otp'
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
          <div className='error'>
            {!error?
            null
            :
            <span>Please Check Your Email or OTP</span>
            }
            </div>
        </div>
      </div>
    );
  }
}


function mapStateToprpos(state) {
  return {
    popUp:state.popUp.showReset,
    error:state.error,    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    send:(email) => dispatch(send(email)),
    verify:(email,otp) => dispatch(verify(email,otp))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(newPwd);