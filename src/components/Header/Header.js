// Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">
        <NavLink exact to="/" className="nav-link">
          <img
            src="https://thewasserstoff.com/images/logo-top.png"
            alt="Your Logo"
          />
        </NavLink>
        <span className="logo-text">Wasserstoff</span>
      </div>
      <div className="sections">
       
        <NavLink
          exact
          to="/statistics"
          className="nav-link"
          activeClassName="active"
        >
          Statistics
        </NavLink>
        <NavLink
          exact
          to="/overview"
          className="nav-link"
          activeClassName="active"
        >
          Overview
        </NavLink>
        <NavLink
          exact
          to="/dashboard"
          className="nav-link"
          activeClassName="active"
        >
          Dashboard
        </NavLink>
        <NavLink
          exact
          to="/analytics"
          className="nav-link"
          activeClassName="active"
        >
          Analytics
        </NavLink>
      </div>
      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>

      <div className="user-actions">
        <span className="login-icon">Login</span>
        <span className="filter-icon">Filter</span>
      </div>
    </header>
  );
};

export default Header;
