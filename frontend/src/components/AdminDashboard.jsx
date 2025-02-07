// filepath: /frontend/src/components/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <nav>
      <ul>
        <li><Link to="/admin/add-product">Add Product</Link></li>
        <li><Link to="/admin/edit-product">Edit Product</Link></li>
        <li><Link to="/admin/delete-product">Delete Product</Link></li>
      </ul>
    </nav>
  </div>
);

export default AdminDashboard;