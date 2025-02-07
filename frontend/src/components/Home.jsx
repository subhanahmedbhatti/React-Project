// filepath: /frontend/src/components/Home.jsx
import React from 'react';
import ProductList from './ProductList';
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="hero">
      <div className="hero-image"></div>
    </div>
    <ProductList />
  </div>
);

export default Home;