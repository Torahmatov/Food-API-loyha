import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://www.themealdb.com/images/logo-small.png"
          alt="TheMealDB"
        />
        <h1>TheMealDB</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link home-btn">
          Home
        </Link>
        <Link to="/api" className="nav-link">
          API
        </Link>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </nav>
  );
};

export default Navbar;
