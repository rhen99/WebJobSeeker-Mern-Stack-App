import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerApplicant } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import { checkForErrors } from "../helpers";

function ApplicantRegister() {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    dispatch(registerApplicant(newUser));
  };

  const errors = useSelector((state) => state.errors);

  const alert = checkForErrors(
    errors.id,
    <div className="alert alert-danger">{error}</div>
  );
  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setError(checkForErrors(errors.id, errors.msg.msg));
  }, [errors]);
  return (
    <form onSubmit={onSubmit}>
      {alert}
      <div className="form-row">
        <div className="col">
          <label htmlFor="name_first">First Name</label>
          <input
            type="text"
            id="name_first"
            className="form-control"
            name="firstname"
            onChange={onChange}
          />
        </div>
        <div className="col">
          <label htmlFor="name_last">Last Name</label>
          <input
            type="text"
            id="name_last"
            className="form-control"
            name="lastname"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          name="password"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password_confirm">Confirm Password</label>
        <input
          type="password"
          id="password_confirm"
          className="form-control"
          name="password_confirm"
          onChange={onChange}
        />
      </div>
      <input
        type="submit"
        value="Register Applicant"
        className="btn btn-primary"
      />
    </form>
  );
}

export default ApplicantRegister;
