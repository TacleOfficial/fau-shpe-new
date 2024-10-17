import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/SHPE_logo_horiz_Florida-Atlantic-University_DKBG.png';
const Navbar = () => {
  return (
    <div className="navbar-__container">
      <div className="navbar-__wrapper">
        {/* Logo */}
        <Link to="/" className="navbar-__logo">
          <img src={logo} alt="SHPE FAU Logo" />
        </Link>

        {/* Links */}
        <div className="navbar-__content">
          <Link to="/" className="navbar-__text-link">Home</Link>
          <Link to="/eboard" className="navbar-__text-link">E-Board</Link>
          <Link to="/devteam" className="navbar-__text-link">Dev Team</Link>
          <Link to="/events" className="navbar-__text-link">Events</Link>
          <Link to="/gallery" className="navbar-__text-link">Gallery</Link>
          <Link to="/sponsors" className="navbar-__text-link">Sponsors</Link>
          <Link to="/resources" className="navbar-__text-link">Resources</Link>
          <Link to="/contactus" className="navbar-__text-link">Contact Us</Link>
        </div>

        {/* Join Button */}
        <div className="navbar-__button-container">
          <Link to="/join-us" className="navbar-__button">JOIN NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;