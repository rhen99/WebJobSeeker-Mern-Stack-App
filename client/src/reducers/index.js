import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  jobCollection: jobsReducer,
  auth: authReducer,
  errors: errorReducer,
});
