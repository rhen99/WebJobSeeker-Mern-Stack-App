import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { isAuth } from "../helpers";
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
  const dispatch = useDispatch();

  const logoutFn = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const dynamicLinks = {
    notLoggedIn: (
      <>
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
      </>
    ),
    isLoggedIn: (
      <li className="nav-item nav__item">
        <Link to="#" className="nav-link" onClick={logoutFn}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </li>
    ),
  };

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
              <li
                className="nav-item nav__item"
                data-to={isAuth("/job-list", "/")}
              >
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item nav__item" data-to="/about-us">
                <Link to="/about-us" className="nav-link nav__link">
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {isAuth(dynamicLinks.isLoggedIn, dynamicLinks.notLoggedIn)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
