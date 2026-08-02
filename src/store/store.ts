//Nosso armazenamento geral do reducer
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import rootReduce from "./root-reducer";

const store = createStore(rootReduce, applyMiddleware(logger));

export default store;
