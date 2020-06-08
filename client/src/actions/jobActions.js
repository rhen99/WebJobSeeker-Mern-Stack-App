import axios from "axios";
import { FETCH_JOBS } from "./types";

export const fetchJobs = () => (dispatch) => {
  axios
    .get("api/jobs")
    .then((res) => {
      dispatch({
        type: FETCH_JOBS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
