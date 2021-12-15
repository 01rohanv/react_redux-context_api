import counterReducer from "./counter";
import isLogged from "./islogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLogged,
});
export default allReducer;
