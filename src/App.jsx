import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';
import './App.css';
import productImage from './assets/waterfall.jpg';

function App() {
  const products = ["JBL Flip 6", "Sony SRS-XG300", "Beats Pill"];
  const prices = [120, 250, 170];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (index, newQuantity) => {
    setSelectedIndex(index);
    setQuantity(newQuantity);
  };

  return (
    <div className="container">
      <Header title="Welcome to product page!" image={productImage} />
      <ProductForm products={products} prices={prices} onProductChange={handleProductChange} />
      <OrderInfo products={products} prices={prices} selectedIndex={selectedIndex} quantity={quantity} />
    </div>
  );
}

export default App;
