import {
  FETCH_JOBS,
  FETCH_ONE_JOB,
  FETCH_RECENT_JOBS,
  ADD_JOB,
  EDIT_JOB,
  UPDATE_JOB,
  DELETE_JOB,
} from "../actions/types";

const initialState = {
  jobs: [],
  job: {},
  isEdit: false,
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
    case FETCH_RECENT_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case ADD_JOB:
    case UPDATE_JOB:
      return {
        ...state,
        jobs: [action.payload, ...state.jobs],
      };
    case EDIT_JOB:
      return {
        ...state,
        isEdit: true,
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};
