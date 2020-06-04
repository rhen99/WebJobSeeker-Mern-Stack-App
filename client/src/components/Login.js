import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ApplicantLogin from "./ApplicantLogin";
import EmployerLogin from "./EmployerLogin";
function Login() {
  const [formState, setFormState] = useState();
  const { loginForm } = useParams();
  useEffect(() => {
    setFormState(
      loginForm === "applicant" || loginForm === "employer"
        ? loginForm
        : "applicant"
    );
  }, [loginForm]);
  const renderElem = (applicant, employer) => {
    switch (formState) {
      case "applicant":
        return applicant;
      case "employer":
        return employer;
      default:
        return null;
    }
  };
  return (
    <div className="container push-footer mt-5">
      <div className="row justify-content-md-center">
        <div className="col col-sm-12 col-md-9">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link
                    className={renderElem("nav-link active", "nav-link")}
                    to="applicant"
                  >
                    Applicant Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={renderElem("nav-link", "nav-link active")}
                    to="employer"
                  >
                    Employer Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Login as{" "}
                {renderElem(
                  <span className="text-success font-weight-bold">
                    Applicant
                  </span>,
                  <span className="text-warning font-weight-bold">
                    Employer
                  </span>
                )}
              </h5>
              {renderElem(<ApplicantLogin />, <EmployerLogin />)}
            </div>
            <div className="card-footer">
              Don't have an account?{" "}
              <Link
                to={renderElem("/register/applicant", "/register/employer")}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
