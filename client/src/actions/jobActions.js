import axios from "axios";
import { FETCH_JOBS, FETCH_TOP_JOBS, FETCH_ONE_JOB } from "./types";
import { returnErrors } from "./errorActions";

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
export const fetchTopJobs = () => (dispatch) => {
  axios
    .get("/api/jobs/top_paying")
    .then((res) => {
      dispatch({
        type: FETCH_TOP_JOBS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.msg, err.response.status));
    });
};
export const fetchOneJob = (id) => (dispatch) => {
  axios
    .get(`/api/jobs/${id}`)
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
