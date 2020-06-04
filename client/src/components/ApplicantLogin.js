import React from "react";

function ApplicantLogin() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="form-control" />
      </div>
      <input type="submit" value="Login" className="btn btn-primary" />
    </form>
  );
}

export default ApplicantLogin;
