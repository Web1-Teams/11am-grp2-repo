import React, { useState } from 'react';
import './Resp.css'; 
import { Link } from 'react-router-dom';
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
            <button onClick={hideSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#e8eaed">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>

          <li><Link to="/home">الرئيسية</Link></li>
          <li><Link to="/hotels">فنادقنا</Link></li>
          <li><Link to="/tourist-places">أماكن سياحية</Link></li>
          <li><Link to="/restaurants">مطاعم</Link></li>
          <li><Link to="/blog">مدونة</Link></li>
          <li><Link to="/who-we-are">من نحن؟</Link></li>
        </ul>
    
      )}


        {!isSidebarVisible && (
        <ul className="hide">
          <li className="hide-li"><Link to="/home">الرئيسية</Link></li>
          <li className="hide-li"><Link to="/hotels">فنادقنا</Link></li>
          <li className="hide-li"><Link to="/tourist-places">أماكن سياحية</Link></li>
          <li className="hide-li"><Link to="/restaurants">مطاعم</Link></li>
          <li className="hide-li"><Link to="/blog">مدونة</Link></li>
          <li className="hide-li"><Link to="/who-we-are">من نحن؟</Link></li>
        </ul>
      )}
    </div>
  );
};


export default Resp;
