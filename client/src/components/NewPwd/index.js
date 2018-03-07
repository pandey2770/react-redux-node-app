import React, { Component } from 'react';
import { connect } from 'react-redux';
import { close, send } from '../../actions';

class newPwd extends Component {
  render() {
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
                className='form-control'
                placeholder="New password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={this.updateInput}
                className='form-control'
                placeholder="Confirm New Password"
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
    popUp:state.popUp.showReset,
    error:state.error,    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(close()),
    send:(email) => dispatch(send(email))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(newPwd);