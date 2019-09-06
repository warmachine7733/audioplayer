import { combineReducers } from "redux";
import { lists } from "./lists/reducer";
import { individualPlay } from "./individualPlay/reducer";

const appReducer = combineReducers({ lists, individualPlay });
export default appReducer;
