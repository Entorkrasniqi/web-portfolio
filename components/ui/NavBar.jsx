
// components/NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Your Name</h1>
      </div>
      <div className="navbar-right">
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a href="#resume">Resume</a>
      </div>
    </nav>
  );
};

export default NavBar;