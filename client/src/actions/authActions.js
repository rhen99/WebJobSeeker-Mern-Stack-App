import axios from "axios";
import {
  LOAD_USER,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "../helpers";
export const loadUser = () => (dispatch) => {
  axios
    .get("/api/auth/user", tokenConfig())
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
export const registerEmployer = ({
  firstname,
  lastname,
  email,
  company,
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
    company,
    password,
    password_confirm,
  });

  axios
    .post("/api/employers/register", body, config)
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

export const applicantLogin = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/applicants/auth/", body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};
export const employerLogin = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/employers/auth/", body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
