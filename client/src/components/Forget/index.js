import React, { Component } from 'react';
import { connect } from 'react-redux';
import { close, send } from '../../actions';

class Forget extends Component {
  state = {
    email: '',
    span:false,
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

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.props.close();
    });
  }

  updateInput = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  close = () => {
    this.props.close();
  }

  send = () => {
    const { email, span } = this.state;
    this.props.send(email);    
    if(span){
      this.setState({
        span:!span
      })
    }
  }

  render() {
    const { email, span, error } = this.state;
    if (!this.props.popUp) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <input
            type="button"
            value="X"
            onClick={this.close}
            className="closeButton"
          />
          <h2 className="center-center">Forget</h2>
          <form>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.updateInput}
                className='form-control'
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            {span === 'span'?
              <span>Please enter your Email</span>
              :
              null              
              }
            <div className="button-style">
              <input
                type="button"
                value="send"
                onClick={this.send}
                className="btn button btn-primary"
              />
            </div>
            <div className='error'>
            {!error?
            null
            :
            <span>Please Check Your Email</span>
            }
            </div>
          </form>
        </div>
      </div>
    );
  }
}


function mapStateToprpos(state) {
  return {
    popUp:state.popUp.showForget,
    error:state.error,    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(close()),
    send:(email) => dispatch(send(email))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Forget);