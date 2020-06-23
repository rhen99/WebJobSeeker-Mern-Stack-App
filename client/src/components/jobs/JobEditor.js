import React, { useState, useEffect } from "react";
import { addJob } from "../../actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import { checkForErrors } from "../../helpers";
import { Redirect } from "react-router-dom";
import { clearErrors } from "../../actions/errorActions";
import { Editor } from "draft-js";

function JobEditor() {
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errors);

  const [job, setJob] = useState({
    title: "",
    salary: "",
    currency: "",
    salary_type: "year",
    job_type: "full-time",
    description: "",
  });
  const [error, setError] = useState();

  const [redirect, setRedirect] = useState(false);

  const onChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(job));
    setRedirect(true);
  };
  const cancelJob = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    setRedirect(true);
  };
  useEffect(() => {
    setError(checkForErrors(errors.id, errors.msg.msg));
  }, [errors]);

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
                <option value="year" defaultValue>
                  Yearly
                </option>
                <option value="month">Monthly</option>
                <option value="hour">Hourly</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="salary_type">Job Type</label>
            <select
              name="salary_type"
              className="form-control"
              id="salary_type"
              onChange={onChange}
            >
              <option value="full-time" defaultValue>
                Full Time
              </option>
              <option value="freelance">Freelance</option>
              <option value="part-time">Part Time</option>
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
