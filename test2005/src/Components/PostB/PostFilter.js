import React, { useState } from 'react';
import './PostFilter.css'; 

function PostFilter({ setFilterValue }) {
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
      <span
        className="filter-item"
        onClick={() => handleClick("قلقيلية")}
      >
        قلقيلية
      </span>
      <span
        className="filter-item"
        onClick={() => handleClick("رام الله")}
      >
        رام الله
      </span>
    </div>
  );
}

export default PostFilter;
