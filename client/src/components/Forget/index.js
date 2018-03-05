import React, { Component } from 'react';
import { connect } from 'react-redux';
import { close, send } from '../../actions';

class Forget extends Component {
  state = {
    email: '',
    span:''
  };

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
    this.setState({
      span:''
    })
  }

  send = () => {
    const { email, span } = this.state;
    const { number } = Math.floor(Math.random() * 10000);    
    if(span===''){
      this.setState({
        span:'span'
      })
    }
    else{
      this.props.send(email);
      this.setState({
        span:''
      })  
    }
  }

  render() {
    const { email, span } = this.state;
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
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            {span=== 'span'?
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
          </form>
        </div>
      </div>
    );
  }
}


function mapStateToprpos(state) {
  return {
    popUp:state.popUp.showForget,    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(close()),
    send:(email) => dispatch(send(email))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Forget);