import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkForSuccessMessages } from "../../helpers";
import { clearSuccess } from "../../actions/successAction";
import { fetchPostedJobs } from "../../actions/jobActions";
import moment from "moment";
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const success = useSelector((state) => state.success);
  const errors = useSelector((state) => state.errors);
  const jobs = useSelector((state) => state.jobCollection.jobs);

  const dispatch = useDispatch();

  const { firstname, lastname, role } = user;

  const [msg, setMsg] = useState(null);

  useEffect(() => setMsg(checkForSuccessMessages(success.id, success.msg)), [
    success,
  ]);
  useEffect(() => {
    dispatch(fetchPostedJobs());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearSuccess());
    };
  }, []);

  const flashMsg = checkForSuccessMessages(
    success.id,
    <div className="alert alert-success">{msg}</div>
  );

  if (errors.id === "JOB_FAIL") {
    return <Redirect to="/editor" />;
  } else {
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
            {flashMsg}
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
              <tbody>
                {jobs.map((job) => (
                  <tr scope="row" key={job._id}>
                    <td>{moment(job.created_at).format("L")}</td>
                  </tr>
                ))}
              </tbody>
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
}

export default Dashboard;
