import axios from "axios";
import {
  LOAD_USER,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";
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
    .get("/api/auth/user", tokenConfig(getState))
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
export const registerApplicant = ({
  firstname,
  lastname,
  email,
  password,
  password_confirm,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    email,
    password,
    password_confirm,
  });

  axios
    .post("/api/applicants/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};
