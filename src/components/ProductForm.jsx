import React, { useState } from 'react';
import '../App.css';

function ProductForm({ products, prices, onProductChange }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (event) => {
    const index = event.target.value;
    setSelectedIndex(index);
    setQuantity(1);
    onProductChange(index, 1);
  };

  const adjustQuantity = (amount) => {
    const newQuantity = Math.max(1, quantity + amount);
    setQuantity(newQuantity);
    onProductChange(selectedIndex, newQuantity);
  };

  return (
    <div className="product-form">
      <h3>Select product</h3>
      <div className="product-select">
        <label>Product:</label>
        <select value={selectedIndex} onChange={handleProductChange}>
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product} ({prices[index]}€)
            </option>
          ))}
        </select>
      </div>
      <div className="quantity-controls">
        <label>Quantity:</label>
        <button onClick={() => adjustQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => adjustQuantity(1)}>+</button>
      </div>
    </div>
  );
}

export default ProductForm;
