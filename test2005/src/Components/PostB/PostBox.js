import React from 'react';
import './PostBox.css'; 

function PostBox({ imgSrc, category, title, date, description}) {
  return (
    <div className="post-box">
      <img src={imgSrc} alt={category} className="post-img" />
      <h2 className="category">{category}</h2>
      <a href="post-page.html" className="post-title">{title}</a>
      <span className="post-date">{date}</span>
      <p className="post-decription">{description}</p>
        </div>
  );
}

export default PostBox;

