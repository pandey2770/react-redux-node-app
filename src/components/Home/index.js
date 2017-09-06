import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShare } from '../../actions';
import './styles.css';

class Home extends Component {
  state = {
    showModal: false,
    isGoing: true
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const state = {};
    state[`${name}`] = value;
    this.setState(state);
  }

  showModal = () => {
    const showModal = !this.state.showModal;
    this.setState({
      showModal
    });
  };

  showData = () => {
    this.setState({
      showData: true,
    });
    this.addToShare();
  }

  addToShare = () => {
    const { addShare } = this.props;
    const { message } = this.state;
    addShare(message);
  };

  renderModal = () => {
    return (
      <div className="home-modal">
        <input
          type="text" 
          className="home-input" 
          placeholder="Name"
          name="name"
          onChange={this.handleInputChange}
        />
        <input 
          type="text" 
          className="home-input" 
          name="place"
          placeholder="Place"
          onChange={this.handleInputChange}
        />
        <input
          type="file" 
          className="home-input" 
        />
        <textarea
          name="message"
          className="home-input" 
          placeholder="Message"
          onChange={this.handleInputChange}
        />
        <input 
          type="button"
          value="Share"
          onClick={this.showData}
        />
      </div>
    );
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="home-wrapper">
        <div className="home-share">
          {showModal
            ? this.renderModal()
            : <button onClick={this.showModal}>Write A View</button>}
        </div>
        {this.props.share.map(share => <div key={share}>{share}</div>)}
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
