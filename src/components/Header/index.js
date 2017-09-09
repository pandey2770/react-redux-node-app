import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () =>
  <div className="header-wrapper">
    <div className="header-menu">
      <Link to="/" className="header-link">
        Home
      </Link>
    </div>
  </div>;

export default Header;
