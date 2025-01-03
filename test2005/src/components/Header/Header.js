import React from 'react';
import './Header.css'; 

const Header = (props)  => {
  return (

    <div className="home" style={{
      backgroundImage: `url(${props.backgroundImage})`,}}
      >
      <div className="home-text">
      

        <h1 className="home-title">{props.title}</h1>
        <p className="home-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Header;


