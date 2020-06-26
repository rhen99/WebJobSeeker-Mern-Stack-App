import { GET_SUCCESS, CLEAR_SUCCESS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        id: action.payload.id,
        msg: action.payload.msg,
        status: action.payload.status,
      };

    case CLEAR_SUCCESS:
      return {
        msg: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
};
