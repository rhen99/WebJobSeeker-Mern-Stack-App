import axios from "axios";
import nl2br from "nl2br";
import {
  FETCH_JOBS,
  FETCH_RECENT_JOBS,
  FETCH_ONE_JOB,
  ADD_JOB,
  DELETE_JOB,
  FETCH_POSTED_JOBS,
} from "./types";
import { returnErrors } from "./errorActions";
import { returnSuccessMessage } from "./successAction";
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
export const fetchPostedJobs = () => (dispatch) => {
  axios
    .get("/api/jobs/posted", tokenConfig())
    .then((res) => {
      dispatch({
        type: FETCH_POSTED_JOBS,
        payload: res.data,
      });
    })
    .catch((err) => {
      returnErrors(err.response.data, err.response.status);
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
  const breakedDesc = nl2br(description);
  const body = JSON.stringify({
    title,
    description: breakedDesc,
    salary,
    salary_type,
    job_type,
    currency,
  });
  axios
    .post("/api/jobs/create", body, tokenConfig())
    .then((res) => {
      dispatch({
        type: ADD_JOB,
        payload: res.data.job,
      });

      dispatch(returnSuccessMessage(res.data.msg, res.status, "SUCCESS"));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status, "JOB_FAIL"))
    );
};
export const deleteJob = (id) => (dispatch) => {
  axios
    .delete(`/api/jobs/${id}`, tokenConfig())
    .then(() => {
      dispatch({
        type: DELETE_JOB,
        payload: id,
      });
    })
    .catch((err) => {
      returnErrors(err.response.data, err.response.status);
    });
};
