import React from "react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { firstname, lastname, role } = user;

  switch (role) {
    case "applicant":
      return (
        <div className="push-footer container mt-5">
          <h2 className="my-2">
            {firstname} {lastname}
          </h2>
          <h5>Applicant</h5>
          <h3 className="my-3">Applied Jobs</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      );
    case "employer":
      return (
        <div className="push-footer container mt-5">
          <h2 className="my-2">
            {firstname} {lastname}
          </h2>
          <h5>Employer</h5>
          <h3 className="my-3">Posted Jobs</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Applicants</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      );

    default:
      return (
        <div className="push-footer">
          <div className="container">
            <h1>Dashboard</h1>
          </div>
        </div>
      );
  }
}

export default Dashboard;
