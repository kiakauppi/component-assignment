import React from 'react';
import '../App.css';

function Header({ title, image }) {
  return (
    <div className="header">
      <img src={image} alt="Product Logo" />
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
