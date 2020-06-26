import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import successReducer from "./successReducer";

export default combineReducers({
  jobCollection: jobsReducer,
  auth: authReducer,
  errors: errorReducer,
  success: successReducer,
});
