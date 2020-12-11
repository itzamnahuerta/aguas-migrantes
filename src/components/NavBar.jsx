import React from 'react';
import {
  Link
} from 'react-router-dom';

import '../styles/NavBar.scss';

const NavBar = () => {
  return(
      <nav className="navbar-container">
        <div className="link-container">
          <Link className="link-item left" to="/about">About</Link>
        </div>
        <div className="link-container">
          <Link className="link-item left" to="shop">Shop Coming Soon</Link>
        </div>
        <div className="link-container">
          <Link className="link-item left" to="/contact">Contact</Link>
        </div>
        <div className="link-container right-end">
          <Link className="link-item left" to="/projects">View All Projects </Link>
        </div>
      </nav>
  )
};

export default NavBar;