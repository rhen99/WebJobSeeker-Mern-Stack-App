import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOAD_USER,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.user.role);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        user: null,
      };

    default:
      return state;
  }
};
