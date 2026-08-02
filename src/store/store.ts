import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import rootReducer, { RootState } from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(logger));

export type { RootState };
export default store;
