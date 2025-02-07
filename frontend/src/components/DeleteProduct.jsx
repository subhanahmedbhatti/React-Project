// filepath: /frontend/src/components/DeleteProduct.jsx
import React, { useState } from 'react';
import './DeleteProduct.css';

const DeleteProduct = () => {
  const [id, setId] = useState('');

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    // Handle delete product logic here
    console.log('Product deleted:', { id });
  };

  return (
    <div className="delete-product">
      <h2>Delete Product</h2>
      <form onSubmit={handleDeleteProduct}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Product ID"
          required
        />
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default DeleteProduct;