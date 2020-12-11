import { combineReducers } from "redux";
import login from "./login";
import User from "./User";
import plan from "./plan";

const rootReducer = combineReducers({
    login,
    User,
    // plan
})

export default rootReducer;