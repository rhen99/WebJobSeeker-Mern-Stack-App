import axios from "axios";
import { LOAD_USER, AUTH_ERROR } from "./types";
import { returnErrors } from "./errorActions";
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
export const loadUser = () => (dispatch, getState) => {
  axios
    .get("api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
export const register = () => {};
