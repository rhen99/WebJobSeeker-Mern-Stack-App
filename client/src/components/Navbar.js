import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar bg-primary navbar-dark navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WebJobSeeker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  <span className="sr-only">(current)</span>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/how-it-works" className="nav-link">
                  How It Works
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fas fa-user"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
