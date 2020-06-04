import React from "react";
import { Link } from "react-router-dom";
import "../Custom.css";

function Footer() {
  return (
    <div className="footer py-5">
      <div className="container d-flex justify-content-center">
        <div className="flex-grow-1 flex-shrink-1 nav--custom">
          <ul className="nav">
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                How It Works
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h4>Follow Us</h4>
          <ul className="nav d-flex justify-content-center">
            <li className="nav-item">
              <Link className="mx-1" to="#">
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="mx-1" to="#">
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
