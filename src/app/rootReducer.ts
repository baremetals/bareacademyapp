import { combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "../features/auth/reducers"
import uiReducer from "../features/ui/reducers";
import courseReducer from "../features/courses/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  courses: courseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;