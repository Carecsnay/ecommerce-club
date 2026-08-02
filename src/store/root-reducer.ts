import { combineReducers } from "redux";
import userReducer from "./reducers/user/user-reducer"; // Verifique se o caminho do arquivo está correto

const rootReducer = combineReducers({
    userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
