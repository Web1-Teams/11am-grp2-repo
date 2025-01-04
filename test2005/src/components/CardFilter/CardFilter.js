import React, { useState } from 'react';
import './CardFilter.css'; 
//new

function CardFilter({ setFilterValue }) {
  const handleClick = (filter) => {
    setFilterValue(filter);
  };

  return (
    <div className="post-filter container">
      <span
        className="filter-item"
        onClick={() => handleClick("")}
      > الكل</span>
      
      <span
        className="filter-item"
        onClick={() => handleClick("نابلس")}
      >نابلس</span>

      <span
        className="filter-item"
        onClick={() => handleClick("اريحا")}
      >اريحا</span>

      <span
        className="filter-item"
        onClick={() => handleClick("طولكرم")}
      >طولكرم</span>

      <span
        className="filter-item"
        onClick={() => handleClick("القدس")}
      >القدس</span>

      <span
        className="filter-item"
        onClick={() => handleClick("الخليل")}
      >الخليل</span>

      <span
        className="filter-item"
        onClick={() => handleClick("بيت لحم")}
      >بيت لحم</span>

      <span
        className="filter-item"
        onClick={() => handleClick("قلقيلية")}
      >قلقيلية</span>

       <span
        className="filter-item"
        onClick={() => handleClick("رام الله والبيرة")}
      >رام الله والبيرة</span>
      
      <span
        className="filter-item"
        onClick={() => handleClick("طوباس")}
      >طوباس</span>

<span
        className="filter-item"
        onClick={() => handleClick("سلفيت")}
      >سلفيت</span>

<span
        className="filter-item"
        onClick={() => handleClick("جنين")}
      >جنين</span>

    </div>
  );
}

export default CardFilter;