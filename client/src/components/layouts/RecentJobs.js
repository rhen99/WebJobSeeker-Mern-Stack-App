import React, { useEffect } from "react";
import "../../Custom.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecentJobs } from "../../actions/jobActions";
import numeral from "numeral";
import moment from "moment";

function RecentJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobCollection.jobs);
  useEffect(() => dispatch(fetchRecentJobs()), [dispatch]);

  return (
    <section className="top__jobs py-3 push-footer">
      <div className="container">
        <h1>Recent Jobs</h1>
        <div className="row py-3">
          {jobs.map((job) => (
            <div className="col-lg-4 col-md-6 pb-2" key={job._id}>
              <div className="card">
                <div className="card-body">
                  <Link to="#">
                    <h5 className="card-title">{job.title}</h5>
                  </Link>
                  <p>
                    <span className="text-muted">{job.company_name}</span> -{" "}
                    <span className="text-success font-weight-bold">
                      {job.currency} {numeral(job.salary).format("0a")}
                    </span>{" "}
                    Posted{" "}
                    <span className="text-warning font-weight-bold">
                      {moment(job.created_at).startOf("day").fromNow()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentJobs;
