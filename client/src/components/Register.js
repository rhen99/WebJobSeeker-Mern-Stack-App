import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <ul className="nav nav-tabs">
            <li className="nav-item ">
              <Link className="nav-link active">
                Register Applicant Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Register Employer Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Register;
