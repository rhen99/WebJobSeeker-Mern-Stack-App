import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav__item");

    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
      if (navItem.dataset["to"] === location.pathname) {
        navItem.classList.add("active");
      }
    });
  }, [location.pathname]);
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
              <li className="nav-item nav__item" data-to="/">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item nav__item" data-to="/about-us">
                <Link to="/about-us" className="nav-link nav__link">
                  About Us
                </Link>
              </li>
              <li className="nav-item nav__item" data-to="/how-it-works">
                <Link to="/how-it-works" className="nav-link nav__link">
                  How It Works
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav__item" data-to="/login/applicant">
                <Link to="/login/applicant" className="nav-link">
                  <i className="fas fa-user"></i> Login
                </Link>
              </li>
              <li className="nav-item nav__item" data-to="/register/applicant">
                <Link to="/register/applicant" className="nav-link">
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
