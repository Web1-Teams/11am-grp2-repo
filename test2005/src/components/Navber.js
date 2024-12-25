import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isScrolled ? 'bg-light shadow' : 'bg-transparent'
      } fixed-top`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          مدونة آفق
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tourism">
                أماكن سياحية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                من نحن
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
