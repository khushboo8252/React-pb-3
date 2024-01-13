import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="admin-section">
        <h1>Admin Table</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#code">Code</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
