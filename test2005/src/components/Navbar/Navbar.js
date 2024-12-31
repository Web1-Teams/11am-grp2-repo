import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__nav container">
       
        <a href="#" className="navbar__logo"><span>أفق</span></a>
     
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <Link to="/home" className="navbar__menu-link">الرئيسية</Link>
            </li>
            <li className="navbar__menu-item">
              <Link to="/hotels" className="navbar__menu-link">فنادق</Link>
            </li>
            <li className="navbar__menu-item">
              <Link to="/tourist-places" className="navbar__menu-link">أماكن سياحية</Link>
            </li>
            <li className="navbar__menu-item">
              <Link to="/restaurants" className="navbar__menu-link">مطاعم</Link>
            </li>
            <li className="navbar__menu-item">
              <Link to="/contact-us" className="navbar__menu-link">اتصل بنا</Link>
            </li>
            <li className="navbar__menu-item">
              <Link to="/blog" className="navbar__menu-link">مدونة</Link>
            </li>
            <li className="navbar__menu-item">
              <Link to="/who-we-are" className="navbar__menu-link">من نحن</Link>
            </li>
          </ul>
        </div>
     
        <a href="#" className="navbar__login-button">Login</a>
      </div>
    </header>
  );
};

export default Navbar;