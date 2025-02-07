import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cartItems];
    newCart[index].quantity += delta;
    if (newCart[index].quantity < 1) newCart[index].quantity = 1;
    setCartItems(newCart);
  };

  const handleDelete = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };

  const handleCheckout = () => {
    onClose(); // Close the cart drawer
    navigate('/order-form'); // Navigate to the order form
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <div className="cart-item-details">
                <p>${item.price}</p>
                <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping, taxes, and discount codes calculated at checkout.</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;