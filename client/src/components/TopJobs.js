import React, { useEffect } from "react";
import "../Custom.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTopJobs } from "../actions/jobActions";
import numeral from "numeral";
import moment from "moment";

function TopJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobCollection.jobs);
  useEffect(() => dispatch(fetchTopJobs()), [dispatch]);

  return (
    <section className="top__jobs py-3 push-footer">
      <div className="container">
        <h1>Top Paying Jobs</h1>
        <div className="row py-3">
          {jobs.map((job) => (
            <div className="col-lg-4 col-md-6 pb-2" key={job._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {job.company_name}
                  </h6>
                  <p className="card-text">
                    <span className="text-muted">Salary: </span>{" "}
                    <span className="font-weight-bold">
                      {job.currency}
                      {numeral(job.salary).format("0,0")}
                    </span>{" "}
                    Posted {moment(job.created_at).startOf("day").fromNow()}
                  </p>
                  <Link className="btn btn-primary" to="#">
                    View Job
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopJobs;
