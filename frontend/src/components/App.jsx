import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "../context/AuthContext"; // Import AuthProvider as a named export
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import OrderForm from "./OrderForm";
import Sale from "./Sale"; // Import the Sale component
import AdminDashboard from "./AdminDashboard";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import "../index.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    setIsCartOpen(true);
  };

  return (
    <AuthProvider>
      <Router>
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/sale" element={<Sale />} /> {/* Add this route */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
          <Route path="/admin/delete/:id" element={<DeleteProduct />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;