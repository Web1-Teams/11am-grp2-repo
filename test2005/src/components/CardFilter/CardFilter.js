import React, { useState } from 'react';
import './CardFilter.css'; 


function CardFilter({ setFilterValue }) {
  const handleClick = (filter) => {
    setFilterValue(filter);
  };

  return (
    <div className="cared-filter container">
      <span
        className="filterItem"
        onClick={() => handleClick("")}
      > الكل</span>
      
      <span
        className="filterItem"
        onClick={() => handleClick("نابلس")}
      >نابلس</span>

      <span
        className="filterItem"
        onClick={() => handleClick("اريحا")}
      >اريحا</span>

      <span
        className="filterItem"
        onClick={() => handleClick("طولكرم")}
      >طولكرم</span>

      <span
        className="filterItem"
        onClick={() => handleClick("القدس")}
      >القدس</span>

      <span
        className="filterItem"
        onClick={() => handleClick("الخليل")}
      >الخليل</span>

      <span
        className="filterItem"
        onClick={() => handleClick("بيت لحم")}
      >بيت لحم</span>

      <span
        className="filterItem"
        onClick={() => handleClick("قلقيلية")}
      >قلقيلية</span>

       <span
        className="filterItem"
        onClick={() => handleClick("رام الله والبيرة")}
      >رام الله والبيرة</span>
      
      <span
        className="filterItem"
        onClick={() => handleClick("طوباس")}
      >طوباس</span>

      <span
        className="filterItem"
        onClick={() => handleClick("سلفيت")}
      >سلفيت</span>

      <span
        className="filterItem"
        onClick={() => handleClick("جنين")}
      >جنين</span>

    </div>
  );
}

export default CardFilter;