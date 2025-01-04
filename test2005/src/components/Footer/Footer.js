import React from "react";
import "./Footer.css"; 
const Footer = () => {
  return (
    <footer className="footer">
      <p>© Carpoolvenom All Rights Reserved</p>
      <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
    <i className="fab fa-linkedin"></i>
  </a>
</div>

    </footer>
  );
};

export default Footer;
