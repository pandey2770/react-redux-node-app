import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  state = {
    showModal: false
  }

  showModal = () => {
    const showModal = !this.state.showModal;
    this.setState({
      showModal
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="background">
        
        {showModal ?
          <div className="view button-share">
            <input type="text" className="form-home" placeholder="Name" />
            <input type="text" className="form-home" placeholder="Place" />
            <input type="file" className="form-home" />
            <textarea name="message" className="form-home" placeholder="Message" ></textarea>
            <input type="button"value="Share"/>
          </div>:
          <div className="button-share">
            <button onClick={this.showModal}>Write A View</button>
          </div>}
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