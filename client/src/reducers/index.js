import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import usersReducer from "./usersReducer";
import gameReducer from "./gameReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: usersReducer,
  game: gameReducer,
  page: pageReducer,
});
