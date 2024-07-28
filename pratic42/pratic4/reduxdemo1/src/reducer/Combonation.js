import { combineReducers } from "redux";
import { transferdata } from "./perform";
import {currentUser} from "./perform"

const rootReducer = combineReducers({
    transferdata,currentUser
});

export default rootReducer;
