import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShare } from '../../actions';
import { Link } from 'react-router-dom';
import './styles.css';

class Home extends Component {
  state = {
  };

  onMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  addToShare = () => {
    const { addShare } = this.props;
    const { message } = this.state;
    addShare(message);
  };

  delet =(event)=>{

  }
  render() {
    return (
      <div>
        <div className="centered">
          <textarea
            className="home-input" 
            placeholder="Task"
            onChange={this.onMessageChange}
          />
          <input 
            type="button"
            value="Share"
            onClick={this.addToShare}
          />
        </div>
        <div className="centered1">
          {this.props.share.map((share, index) =>
            <div  className="view-come" key={share}>
              {share}
              <button data-index={index} onClick={this.delet} className="button-come">X</button>
            </div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  share: state.share
});
  
const mapDispatchToProps = (dispatch) => {
  return {
    addShare: (text) => dispatch(addShare(text))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
