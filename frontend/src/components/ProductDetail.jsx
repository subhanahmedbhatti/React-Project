import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ onAddToCart }) => {
  const navigate = useNavigate();

  // Static product details
  const product = {
    name: 'Tactical Bag',
    price: 10,
    description: 'Introducing the Splash Tactical Gym Backpack - the ultimate MOLLE style companion for athletes! Designed with meticulous attention to detail, this backpack is engineered to carry, organize, and protect all your power gear and personal belongings, ensuring a seamless gym experience.',
    image: 'https://splash30.com/cdn/shop/files/68D5EEA2-E525-49B2-8A09-8411FBCD32D0_720x.png?v=1737460568'
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleBuyNow = () => {
    navigate('/order-form');
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;