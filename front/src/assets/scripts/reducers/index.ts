import { combineReducers } from "redux";
import { sloganReducer } from "./slogan/sloganReducer";

export default combineReducers({
    slogan: sloganReducer
});