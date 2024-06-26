// src/Navbar.js

import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css'; // We'll create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500}>
            Welcome
          </Link>
        </li>
        <li className="nav-item">
          <Link to="section1" smooth={true} duration={500}>
            Quiz
          </Link>
        </li>
        <li className="nav-item">
          <Link to="section5" smooth={true} duration={500}>
            Connection
          </Link>
        </li>
        <li className="nav-item">
          <Link to="section2" smooth={true} duration={500}>
            Survey
          </Link>
        </li>
        <li className="nav-item">
          <Link to="section3" smooth={true} duration={500}>
          Voter Registration Info
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="section4" smooth={true} duration={500}>
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
