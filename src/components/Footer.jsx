import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Noel Kim</h3>
          <p>Computer Science Graduate</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Noel Kim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 