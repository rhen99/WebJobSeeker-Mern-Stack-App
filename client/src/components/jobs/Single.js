import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { fetchOneJob, deleteJob } from "../../actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import numeral from "numeral";
import parse from "html-react-parser";

function Single({ match }) {
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);
  const { id } = match.params;

  const job = useSelector((state) => state.jobCollection.job);

  useEffect(() => dispatch(fetchOneJob(id)), [dispatch]);

  const {
    title,
    company_name,
    description,
    salary,
    currency,
    job_type,
    salary_type,
    created_at,
    employer_id,
  } = job;

  const deleteFn = () => {
    dispatch(deleteJob(id));
    setRedirect(true);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const actions =
    user.id === employer_id ? (
      <div className="d-flex justify-content-between">
        <div>
          <button className="btn btn-danger" onClick={deleteFn}>
            Delete
          </button>
        </div>
        <div>
          <Link to="/dashboard" className="btn btn-default">
            View Applicant
          </Link>
        </div>
      </div>
    ) : null;

  if (redirect) {
    return <Redirect to="/dashboard" />;
  } else {
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
        <p className="my-5">
          {!description ? "Please Wait..." : parse(description)}
        </p>
        {actions}
      </div>
    );
  }
}

export default Single;
