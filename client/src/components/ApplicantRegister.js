import React from "react";

function ApplicantRegister() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="name_first">First Name</label>
                  <input type="text" id="name_first" className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor="name_last">Last Name</label>
                  <input type="text" id="name_last" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password_confirm">Confirm Password</label>
                <input
                  type="password"
                  id="password_confirm"
                  className="form-control"
                />
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantRegister;
