import React, { Component } from 'react';
import './styles.css';

function uploadImage (event, targetElementId) {
  var file = event.target.files[0];
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.imgur.com/3/image');
  xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
  var data = new FormData();
  data.append('image', file);
  xhr.send(data);
  xhr.addEventListener('load', () => {
    var imgSrc = JSON.parse(xhr.responseText).data.link;
  });
}

class Home extends Component {
  state = {
    showModal: false
  };

  constructor (props){
    super(props);
    this.state={
      isGoing:true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
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
          onChange="uploadImage(event)" 
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

  showData = () => {
    this.setState({
      showData: true,
    });
  }

  render() {
    const { showModal, showData, name, message, place } = this.state;
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
