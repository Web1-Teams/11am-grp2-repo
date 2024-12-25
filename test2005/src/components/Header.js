import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="vh-100 d-flex justify-content-center align-items-center text-center bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold">مدونة آفق</h1>
        <p className="lead">محتوى يستحق القراءة</p>
      </div>
    </header>
  );
};

export default Header;
