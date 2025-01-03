import React, { useState } from 'react';
//import './PostFilter.css'; 

function CardFilter({ setFilterValue }) {
  const handleClick = (filter) => {
    setFilterValue(filter);
  };

  return (
    <div className="post-filter container">
      <span
        className="filter-item"
        onClick={() => handleClick("الكل")}
      >
        الكل
      </span>
      <span
        className="filter-item"
        onClick={() => handleClick("نابلس")}
      >
        نابلس
      </span>
      <span
        className="filter-item"
        onClick={() => handleClick("اريحا")}
      >
          اريحا
      </span>
      <span
        className="filter-item"
        onClick={() => handleClick("طولكرم")}
      >
        طولكرم
      </span>
      <span
        className="filter-item"
        onClick={() => handleClick("القدس")}
      >
        القدس
      </span>
    </div>
  );
}

export default CardFilter;