import { combineReducers } from "redux";
import pages from "./pages";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  pages,
  errors,
  messages,
  auth
});
