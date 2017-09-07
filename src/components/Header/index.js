import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './styles.css';

const Header = () =>
  <div className="header-wrapper">
    <div className="header-menu">
      <Link to="/" className="header-link">
        Home
      </Link>
      <Link to="/views" className="header-link">
        Views
      </Link>
    </div>
  </div>;

export default Header;
