import { FETCH_JOBS, FETCH_ONE_JOB, FETCH_TOP_JOBS } from "../actions/types";

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
      return {
        ...state,
        job: action.payload,
      };
    case FETCH_TOP_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};
