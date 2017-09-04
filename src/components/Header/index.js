import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-meanu">
          <div>
            <img src={logo} className="image" alt="site logo" />
          </div>
          <div className="menu">
            <div>
              <Link to="/">
                <button className="button">Home</button>
              </Link>
            </div>
            <div>
              <Link to="/views">
                <button className="button">Views</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
