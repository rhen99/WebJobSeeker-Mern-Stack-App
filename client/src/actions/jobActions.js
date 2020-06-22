import axios from "axios";
import { FETCH_JOBS, FETCH_RECENT_JOBS, FETCH_ONE_JOB, ADD_JOB } from "./types";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "../helpers";

export const fetchJobs = () => (dispatch) => {
  axios
    .get("/api/jobs")
    .then((res) => {
      dispatch({
        type: FETCH_JOBS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.msg, err.response.status));
    });
};
export const fetchRecentJobs = () => (dispatch) => {
  axios
    .get("/api/jobs/recent")
    .then((res) => {
      dispatch({
        type: FETCH_RECENT_JOBS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.msg, err.response.status));
    });
};
export const fetchOneJob = (id) => (dispatch) => {
  axios
    .get(`/api/jobs/${id}`, tokenConfig())
    .then((res) => {
      dispatch({
        type: FETCH_ONE_JOB,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.msg, err.response.status));
    });
};
export const addJob = ({
  title,
  description,
  salary,
  salary_type,
  job_type,
  currency,
}) => (dispatch) => {
  const body = JSON.stringify({
    title,
    description,
    salary,
    salary_type,
    job_type,
    currency,
  });
  axios
    .post("api/jobs/create", body, tokenConfig())
    .then((res) =>
      dispatch({
        type: ADD_JOB,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status, "JOB_FAIL"))
    );
};
