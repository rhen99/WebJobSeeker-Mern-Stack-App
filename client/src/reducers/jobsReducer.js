import { FETCH_JOBS, FETCH_ONE_JOB } from "../actions/types";

const initialState = {
  jobs: [],
  job: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case FETCH_ONE_JOB:
      return {};
    default:
      return state;
  }
};
