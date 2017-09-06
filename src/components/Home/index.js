import React, { Component } from 'react';
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

  renderModal = () => {
    return (
      <div className="home-modal">
        <input type="text" className="home-input" placeholder="Name" />
        <input type="text" className="home-input" placeholder="Place" />
        <input type="file" className="home-input" />
        <textarea name="message" className="home-input" placeholder="Message" />
        <input type="button" value="Share" />
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
      </div>
    );
  }
}

export default Home;

/*
function uploadImage (event) {
  var file = event.target.files[0];
  var xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
  xhr.open('POST', 'https://api.imgur.com/3/image');
  xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
  var data = new FormData(); // eslint-disable-line no-undef
  data.append('image', file);
  xhr.send(data);
  xhr.addEventListener('load', () => {
    var imgSrc = JSON.parse(xhr.responseText).data.link;
    document.getElementById('pic').src = imgSrc;
  });
}
*/
