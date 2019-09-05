import { combineReducers } from "redux";
import { lists } from "./lists/reducer";

const appReducer = combineReducers({ lists });
export default appReducer;
