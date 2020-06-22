import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

function Job({ job }) {
  const {
    _id,
    title,
    company_name,
    salary,
    currency,
    created_at,
    job_type,
    salary_type,
  } = job;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <Link to={`/job/${_id}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
        <p>
          <span className="text-muted">{company_name}</span> -{" "}
          <span className="text-success font-weight-bold">
            {currency} {numeral(salary).format("0a")} a {salary_type}
          </span>{" "}
          Posted{" "}
          <span className="text-warning font-weight-bold">
            {moment(created_at).startOf("day").fromNow()}
          </span>
          <span className="badge badge-danger ml-1">{job_type}</span>
        </p>
      </div>
    </div>
  );
}

export default Job;
