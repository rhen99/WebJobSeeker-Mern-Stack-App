import React, { useEffect } from "react";
import { fetchJobs } from "../actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
function JobListing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  const jobs = useSelector((state) => state.jobCollection.jobs);
  return (
    <div className="push-footer container mt-5">
      <h2 className="mb-3">Find Jobs</h2>
      <form className="bg-light p-3">
        <div className="form-group">
          <label htmlFor="search">Search Jobs</label>
          <input
            type="search"
            id="search"
            name="search"
            className="form-control"
          />
        </div>
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <div className="mt-5">
        {jobs.map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobListing;
