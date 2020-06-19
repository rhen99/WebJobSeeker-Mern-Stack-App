import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ApplicantLogin from "./ApplicantLogin";
import EmployerLogin from "./EmployerLogin";
import { renderElem } from "../../helpers";
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
  return (
    <div className="container push-footer mt-5">
      <div className="row justify-content-md-center">
        <div className="col col-sm-12 col-md-9">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link
                    className={renderElem(
                      formState,
                      "nav-link active",
                      "nav-link"
                    )}
                    to="applicant"
                  >
                    Applicant Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={renderElem(
                      formState,
                      "nav-link",
                      "nav-link active"
                    )}
                    to="employer"
                  >
                    Employer Log In
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Log In as{" "}
                {renderElem(
                  formState,
                  <span className="text-success font-weight-bold">
                    Applicant
                  </span>,
                  <span className="text-warning font-weight-bold">
                    Employer
                  </span>
                )}
              </h5>
              {renderElem(formState, <ApplicantLogin />, <EmployerLogin />)}
            </div>
            <div className="card-footer">
              Don't have an account?{" "}
              <Link
                to={renderElem(
                  formState,
                  "/register/applicant",
                  "/register/employer"
                )}
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
