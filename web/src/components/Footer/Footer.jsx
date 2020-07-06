import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <p> &copy; wishApp. All rights reserved.</p>
        <div className="footer-link">
          <div><Link to="/home">Home</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/services">Services</Link></div>
          <div><Link to="/work">Work</Link></div>
          <div><Link to="/news">News</Link></div>
          <div><Link to="/contant">Contant</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;