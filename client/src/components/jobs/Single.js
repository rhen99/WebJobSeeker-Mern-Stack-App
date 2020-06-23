import React, { useEffect } from "react";
import { fetchOneJob } from "../../actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import numeral from "numeral";
function Single({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => dispatch(fetchOneJob(id)), [dispatch]);

  const job = useSelector((state) => state.jobCollection.job);

  const {
    title,
    company_name,
    description,
    salary,
    currency,
    job_type,
    salary_type,
    created_at,
  } = job;
  return (
    <div className="push-footer container mt-5">
      <h1 className="my-3">{title}</h1>
      <h5>
        <span className="text-muted">{company_name}</span> -{" "}
        <span className="text-success font-weight-bold">
          {currency} {numeral(salary).format("0a")} a {salary_type}
        </span>{" "}
        Posted{" "}
        <span className="text-warning font-weight-bold">
          {moment(created_at).startOf("day").fromNow()}
        </span>
        <span className="badge badge-danger ml-1">{job_type}</span>
      </h5>
      <p className="my-5">{description}</p>
    </div>
  );
}

export default Single;
