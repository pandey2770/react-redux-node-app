import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verify } from '../../actions';

class newPwd extends Component {
  state = {
    confirmPassword: '',
    newPassword:'',
    otp:'',
    change:'form-control',
    error:'form-control'
  };


  componentWillReceiveProps(nextProps){
    const {error} = nextProps;
    if(error[0]==='error'){
      this.setState({
        error: 'className'
      });
    }
  }

  send = () => {
    const {  confirmPassword, newPassword, otp } = this.state;
    if (newPassword !== confirmPassword) {
        this.setState({
          change:'className'
        })
    }else {
      this.props.verify( newPassword, otp);
    }  
  }

  updateInput = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };


  render() {
    const { confirmPassword, newPassword, otp ,change,error } = this.state;  
    if (!this.props.popUp.showReset) {
      return null;
    }if(this.props.popUp.pwd){
      return (
        <div className="modal">
          <div className="modal-content">
          <h2 className="center-center confirm">Password Change</h2>
          </div>
        </div>
      )
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <h2 className="center-center">New Password</h2>
          <form>
            <div className="form-group">
              <input
                type="otp"
                onChange={this.updateInput}
                className={error}
                placeholder="OTP"
                value={otp}
                name='otp'
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={this.updateInput}
                className={change}
                placeholder="New Password"
                value={newPassword}
                name='newPassword'
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={this.updateInput}
                className={change}
                placeholder="Confirm Password"
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
    popUp:state.popUp,
    error:state.error,    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    verify:(newPassword,otp) => dispatch(verify(newPassword,otp))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(newPwd);