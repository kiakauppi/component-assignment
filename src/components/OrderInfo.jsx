import React from 'react';
import '../App.css';

function OrderInfo({ products, prices, selectedIndex, quantity }) {
  if (selectedIndex === null) return null;

  const totalPrice = prices[selectedIndex] * quantity;

  return (
    <div className="order-info">
      <h3>Order info</h3>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{products[selectedIndex]}</td>
          <td>{quantity}</td>
          <td>{totalPrice}€</td>
        </tr>
      </table>
    </div>
  );
}

export default OrderInfo;
