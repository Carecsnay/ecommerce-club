import { combineReducers } from "redux";
import userReducer from "./reducers/user-reducer";

const rootReduce = combineReducers({
    //userReducer: userReducer ou somente userReducer
    userReducer,
});

export default rootReduce;
