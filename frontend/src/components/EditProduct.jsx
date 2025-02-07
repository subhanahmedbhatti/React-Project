// filepath: /frontend/src/components/EditProduct.jsx
import React, { useState } from 'react';
import './EditProduct.css';

const EditProduct = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleEditProduct = (e) => {
    e.preventDefault();
    // Handle edit product logic here
    console.log('Product edited:', { id, name, price });
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleEditProduct}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Product ID"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          required
        />
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProduct;