import React, { useEffect } from "react";
import "../Custom.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../actions/jobActions";

function TopJobs() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchJobs()), []);
  const jobs = useSelector((state) => state.jobCollection.jobs);

  return (
    <section className="top__jobs py-3 push-footer">
      <div className="container">
        <h1>Top Paying Jobs</h1>
        <div className="row py-3">
          <div className="col-md-3 col-sm-6 pb-2">
            <div className="card"></div>
          </div>
        </div>
      </div>
      {console.log(jobs)}
    </section>
  );
}

export default TopJobs;
