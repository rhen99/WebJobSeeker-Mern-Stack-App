import { GET_SUCCESS, CLEAR_SUCCESS } from "./types";

export const returnSuccessMessage = (msg, status, id = null) => {
  return {
    type: GET_SUCCESS,
    payload: { msg, status, id },
  };
};
export const clearSuccess = () => {
  return {
    type: CLEAR_SUCCESS,
  };
};
