import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import searchIcon from "../imgs/search.png";
import cartIcon from "../imgs/cart.png";

const Header = ({ onCartClick }) => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <Link to="/login" className="account-link">Account</Link>
          <span className="location">Pakistan</span>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="middle-bar">
        <div className="middle-bar-content">
          <Link to="/" className="logo">SPLASH 30</Link>
          <nav className="nav-links">
            <Link to="/sale">Sale</Link>
            <Link to="/clothing">Clothing</Link>
            <Link to="/bags">Bags</Link>
            <Link to="/fitness">Fitness</Link>
            <Link to="/accessories">Accessories</Link>
          </nav>
          <div className="icons">
            <Link to="/search"><img src={searchIcon} alt="Search" className="icon" /></Link>
            <img src={cartIcon} alt="Cart" className="icon" onClick={onCartClick} />
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-item">☎️ Swift Customer Support</div>
          <div className="announcement-item">♻️ Easy Returns And Exchanges</div>
          <div className="announcement-item">🚚 Unlock Free Shipping Above 3,000 PKR</div>
        </div>
      </div>
    </header>
  );
};

export default Header;