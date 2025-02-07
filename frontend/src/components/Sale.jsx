import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sale.css';

const Sale = () => {
  const navigate = useNavigate();

  // Sample products on sale
  const saleProducts = [
    {
      id: 1,
      name: 'Tactical Bag',
      price: 10,
      image: 'https://splash30.com/cdn/shop/files/68D5EEA2-E525-49B2-8A09-8411FBCD32D0_720x.png?v=1737460568',
      description: 'Splash Premium Tactical Bag',
    },
    {
      id: 2,
      name: 'Anti-Theft Backpack',
      price: 15,
      image: 'https://splash30.com/cdn/shop/files/TerraTote-Dynamo_Grey1_720x.jpg?v=1735305587',
      description: 'Splash Premium Duffle Bag',
    },
    // Add more products as needed
  ];

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="sale-page">
      <h2>Products on Sale</h2>
      <div className="sale-products">
        {saleProducts.map((product) => (
          <div key={product.id} className="sale-product" onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;