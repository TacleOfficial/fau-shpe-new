import React from 'react';
import '../assets/css/Footer.css';
import discordlogo from "../assets/images/discord.svg";
import instalogo from '../assets/images/instagram.png';

const Footer = () => {
  return (
    <div className="footer-__wrapper">
      <div className="footer-__container">
        <div className="footer-__links-container">
          <a href="/events" className="footer__text-link">Events</a>
          <a href="/gallery" className="footer__text-link">Gallery</a>
          <a href="/sponsors" className="footer__text-link">Sponsors</a>
          <a href="/resources" className="footer__text-link">Resources</a>
        </div>
        <div className="footer-__social-media-icons-container">
          <a href="https://discord.com" className="footer-__social-media-icons"><img src={discordlogo} alt="Discord" /></a>
          <a href="https://instagram.com" className="footer-__social-media-icons"><img src={instalogo} alt="Instagram" /></a>
        </div>
        <p>© SHPE Florida Atlantic 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
