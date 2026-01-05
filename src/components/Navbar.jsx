import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // You can add extra CSS for hover/animations here

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
      <div className="container px-4">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Travelo
        </NavLink>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">

            <li className="nav-item">
              <NavLink 
                className="nav-link text-dark" 
                to="/" 
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className="nav-link text-dark" 
                to="/about" 
                activeclassname="active"
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className="nav-link text-dark" 
                to="/tours" 
                activeclassname="active"
              >
                Tours
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className="nav-link text-dark" 
                to="/destinations" 
                activeclassname="active"
              >
                Destinations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className="nav-link text-dark" 
                to="/gallery" 
                activeclassname="active"
              >
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className="nav-link text-dark" 
                to="/contact" 
                activeclassname="active"
              >
                Book Now
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
