import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar__container container">
        <div className="navbar__logo">
          <h1 className="navbar__logo__h1">WebJobSeeker</h1>
          <span
            className="fas fa-bars navbar__mobile__btn"
            onClick={navToggle}
          ></span>
        </div>
        <ul
          className={
            isOpen
              ? "navbar__list navbar__list--left navbar__list--open"
              : "navbar__list navbar__list--left"
          }
        >
          <li className="navbar__list__item">
            <Link className="navbar__list__link">Home</Link>
          </li>
          <li className="navbar__list__item">
            <Link className="navbar__list__link">About</Link>
          </li>
          <li className="navbar__list__item">
            <Link className="navbar__list__link">How It Works</Link>
          </li>
        </ul>
        <ul
          className={
            isOpen
              ? "navbar__list navbar__list--right navbar__list--open"
              : "navbar__list navbar__list--right"
          }
        >
          <li className="navbar__list__item">
            <Link className="navbar__list__link">Register</Link>
          </li>
          <li className="navbar__list__item">
            <Link className="navbar__list__link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
