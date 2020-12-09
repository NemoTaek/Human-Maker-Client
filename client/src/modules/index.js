import {combineReducers} from "redux";
import login from "./login";
import User from "./User";

const rootReducer = combineReducers({
    login,   
    User
})

export default rootReducer;