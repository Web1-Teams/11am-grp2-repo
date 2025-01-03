import React, { useState } from 'react';
import './Resp.css'; 

const Resp = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="menu">
      <button className="side-btn" onClick={showSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </button>

      {isSidebarVisible && (
        <ul className="side">
          <li>
            <button onClick={hideSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#e8eaed">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>
          </li>
          <li><a href="index.html">الرئيسية</a></li>
          <li><a href="hotel.html">فنادق</a></li>
          <li><a href="Tourist places.html">أماكن سياحية</a></li>
          <li><a href="Restaurants.html">مطاعم</a></li>
          <li><a href="Blog.html">مدونة</a></li>
          <li><a href="Who we are.html">من نحن</a></li>
        </ul>
      )}

      {!isSidebarVisible && (
        <ul>
          <li className="hideli"><a href="index.html">الرئيسية</a></li>
          <li className="hideli"><a href="hotel.html">فنادق</a></li>
          <li className="hideli"><a href="Tourist places.html">أماكن سياحية</a></li>
          <li className="hideli"><a href="Restaurants.html">مطاعم</a></li>
          <li className="hideli"><a href="Blog.html">مدونة</a></li>
          <li className="hideli"><a href="Who we are.html">من نحن</a></li>
        </ul>
      )}
    </div>
  );
};

export default Resp;
