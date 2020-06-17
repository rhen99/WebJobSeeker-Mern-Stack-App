import React, { useState, useEffect } from "react";
import { addJob } from "../actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import { checkForErrors } from "../helpers";

function JobEditor() {
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errors);
  const jobs = useSelector((state) => state.jobCollection);

  const [job, setJob] = useState({
    title: "",
    company_name: "",
    salary: "",
    currency: "",
    description: "",
  });
  const [error, setError] = useState();

  const onChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(job));
  };

  useEffect(() => {
    setError(errors.id, errors.msg.msg);
  }, [errors]);
  return (
    <div className="container push-footer mt-5">
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
            id="description"
            onChange={onChange}
          ></textarea>
        </div>
        <input
          type="submit"
          className="btn btn-block btn-primary"
          value="Publish Job"
        />
      </form>
    </div>
  );
}

export default JobEditor;
