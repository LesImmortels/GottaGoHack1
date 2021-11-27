import { combineReducers } from "redux";
import userReducers from "./User/user.reducer";

const rootReducer = combineReducers({
    user: userReducers,
});
export default rootReducer;