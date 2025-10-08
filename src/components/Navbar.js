import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = ({ 
  searchTerm, 
  setSearchTerm, 
  isLoggedIn, 
  handleLogout 
}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          <img 
            src={logo} 
            alt="Travel Logo" 
            className="logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.textContent = '--- World Travels';
            }}
          />
          <span>Travelo</span>
        </Link>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          
          {isLoggedIn ? (
            <>
              <Link to="/profile">Profile</Link>
              <button 
                onClick={handleLogout}
                className="logout-button"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;