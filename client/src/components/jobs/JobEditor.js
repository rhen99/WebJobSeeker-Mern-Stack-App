import React, { useState, useEffect } from "react";
import { addJob, fetchOneJob, updateJob } from "../../actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import { checkForErrors } from "../../helpers";
import { Redirect } from "react-router-dom";
import { clearErrors } from "../../actions/errorActions";

function JobEditor({ match }) {
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errors);
  const jobs = useSelector((state) => state.jobCollection);

  const [job, setJob] = useState({
    title: "",
    salary: "",
    currency: "",
    salary_type: "year",
    job_type: "full-time",
    description: "",
  });
  const [editedJob, setEditedJob] = useState({
    title: jobs.job.title,
    salary: jobs.job.salary,
    currency: jobs.job.currency,
    salary_type: jobs.job.salary_type,
    job_type: jobs.job.job_type,
    description: jobs.job.description,
  });

  const [error, setError] = useState();

  const [redirect, setRedirect] = useState(false);

  const onChange = (e) => {
    if (Object.keys(match.params).length > 0) {
      setEditedJob({ ...editedJob, [e.target.name]: e.target.value });
    } else {
      setJob({ ...job, [e.target.name]: e.target.value });
    }
  };
  const onSubmit = (e) => {
    if (Object.keys(match.params).length > 0) {
      e.preventDefault();
      dispatch(updateJob(match.params.id, editedJob));
      setRedirect(true);
    } else {
      e.preventDefault();
      dispatch(addJob(job));
      setRedirect(true);
    }
  };
  const cancelJob = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    setRedirect(true);
  };
  useEffect(() => {
    setError(checkForErrors(errors.id, errors.msg.msg));
  }, [errors]);

  useEffect(() => {
    if (Object.keys(match.params).length > 0) {
      dispatch(fetchOneJob(match.params.id));
      setEditedJob({
        title: jobs.job.title,
        salary: jobs.job.salary,
        currency: jobs.job.currency,
        salary_type: jobs.job.salary_type,
        job_type: jobs.job.job_type,
        description: jobs.job.description,
      });
    } else {
      setEditedJob({});
    }
  }, [match.params]);
  const alert = checkForErrors(
    errors.id,
    <div className="alert alert-danger">{error}</div>
  );
  const cancel = checkForErrors(
    errors.id,
    <input
      className="btn btn-default btn-block"
      value="Cancel Job"
      onClick={cancelJob}
    />
  );
  useEffect(() => {
    return () => {
      setEditedJob({
        title: "",
        salary: "",
        currency: "",
        salary_type: "",
        job_type: "",
        description: "",
      });
      setJob({
        title: "",
        salary: "",
        currency: "",
        salary_type: "",
        job_type: "",
        description: "",
      });
    };
  }, []);

  if (redirect) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="container push-footer mt-5">
        {alert}
        <h3 className="mb-3">Job Editor</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              value={editedJob.title}
            />
          </div>

          <div className="form-row">
            <div className="col">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                id="salary"
                name="salary"
                className="form-control"
                onChange={onChange}
                value={editedJob.salary}
              />
            </div>
            <div className="col">
              <label htmlFor="currency">Currency</label>
              <input
                type="text"
                id="currency"
                className="form-control"
                name="currency"
                onChange={onChange}
                value={editedJob.currency}
              />
            </div>
            <div className="col">
              <label htmlFor="salary_type">Salary Type</label>
              <select
                onChange={onChange}
                name="salary_type"
                id="salary_type"
                className="form-control"
              >
                {editedJob.salary_type === "year" ? (
                  <option value="year" defaultValue>
                    Yearly
                  </option>
                ) : (
                  <option value="year">Yearly</option>
                )}
                {editedJob.salary_type === "month" ? (
                  <option value="month" defaultValue>
                    Monthly
                  </option>
                ) : (
                  <option value="month">Monthly</option>
                )}
                {editedJob.salary_type === "hour" ? (
                  <option value="hour" defaultValue>
                    Hourly
                  </option>
                ) : (
                  <option value="hour">Hourly</option>
                )}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="job_type">Job Type</label>
            <select
              name="job_type"
              className="form-control"
              id="job_type"
              onChange={onChange}
            >
              {editedJob.job_type === "full-time" ? (
                <option defaultValue value="full-time">
                  Full Time
                </option>
              ) : (
                <option value="full-time">Full Time</option>
              )}
              {editedJob.job_type === "freelance" ? (
                <option defaultValue value="freelance">
                  Freelance
                </option>
              ) : (
                <option value="freelance">Freelance</option>
              )}
              {editedJob.job_type === "part-time" ? (
                <option defaultValue value="part-time">
                  Part Time
                </option>
              ) : (
                <option value="part-time">Part Time</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Job Description</label>
            <textarea
              className="form-control"
              style={{
                resize: "none",
                height: "200px",
              }}
              name="description"
              onChange={onChange}
              value={editedJob.description}
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Publish Job"
          />
          {cancel}
        </form>
      </div>
    );
  }
}

export default JobEditor;
