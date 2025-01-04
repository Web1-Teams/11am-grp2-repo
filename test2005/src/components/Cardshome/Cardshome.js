import React from "react";
import { Link } from "react-router-dom";
import "./Cardshome.css";
import Headerhome from "./Headerhome";

import hotelImg from "../../assets/hotel.jpg";
import oldcityImg from "../../assets/oldcity.jpg";
import resImg from "../../assets/res.jpg";

const Cardshome = () => {
  return (
    <div>
      
      <Headerhome />

      
      <div className="container">
        <div className="background">
          <div className="content">
            <h1>
              أهلا بكم في <span>فلسطين</span>
            </h1>
            <p>
              فلسطين من أجمل البلدان ومن أقدم البلدان. تحتوي على أروع الأماكن السياحية،
              الفنادق والمطاعم، وسنكون مرشدك السياحي للتعرف على هذه الأماكن بشكل أفضل.
            </p>
            <a href="#explore" className="explore-button">
              اكتشف
            </a>
          </div>
           
      <div className="cards">
        <Link to="/hotels" className="card">
          <h3>الفنادق</h3>
          <img src={hotelImg} alt="Hotels" />
        </Link>
        <Link to="/tourist-places" className="card">
          <h3>الأماكن السياحية</h3>
          <img src={oldcityImg} alt="Tourist places" />
        </Link>
        <Link to="/restaurants" className="card">
          <h3>المطاعم</h3>
          <img src={resImg} alt="Restaurants" />
        </Link>
      </div>
    </div>
  

        </div>
      </div>

      
  );
};

export default Cardshome;
