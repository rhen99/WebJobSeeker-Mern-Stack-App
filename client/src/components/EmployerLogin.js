import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkForErrors } from "../helpers";
import { employerLogin } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";

function EmployerLogin() {
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    dispatch(employerLogin(newUser));
  };

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    setError(checkForErrors(errors.id, errors.msg.msg));
  }, [errors]);

  const alert = checkForErrors(
    errors.id,
    <div className="alert alert-danger">{error}</div>
  );
  return (
    <form onSubmit={onSubmit}>
      {alert}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          className="form-control"
        />
      </div>
      <input type="submit" value="Log In" className="btn btn-primary" />
    </form>
  );
}

export default EmployerLogin;
