import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShare } from '../../actions';
import './styles.css';

class Home extends Component {
  state = {
    showModal: false
  };

  showModal = () => {
    const showModal = !this.state.showModal;
    this.setState({
      showModal
    });
  };

  addToShare = () => {
    const { addShare } = this.props;
    const { message } = this.state;
    addShare(message);
  };

  renderModal = () => {
    return (
      <div className="home-modal">
        <input type="text" className="home-input" placeholder="Name" />
        <input type="text" className="home-input" placeholder="Place" />
        <input type="file" className="home-input" />
        <textarea name="message" className="home-input" placeholder="Message" />
        <input type="button" value="Share" onClick={this.addToShare} />
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
