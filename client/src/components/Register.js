import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ApplicantRegister from "./ApplicantRegister";
import "../Custom.css";
import EmployerRegister from "./EmployerRegister";

function Register() {
  const { registerForm } = useParams("applicant");
  const [formState, setFormState] = useState();
  useEffect(() => {
    setFormState(
      registerForm === "applicant" || registerForm === "employer"
        ? registerForm
        : "applicant"
    );
  }, [registerForm]);
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
                    to="applicant"
                    className={renderElem("nav-link active", "nav-link")}
                  >
                    Register As Applicant
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="employer"
                    className={renderElem("nav-link", "nav-link active")}
                  >
                    Register As Employer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Register as{" "}
                {renderElem(
                  <span className="text-success font-weight-bold">
                    Applicant
                  </span>,
                  <span className="text-warning font-weight-bold">
                    Employer
                  </span>
                )}
              </h5>
              {renderElem(<ApplicantRegister />, <EmployerRegister />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
