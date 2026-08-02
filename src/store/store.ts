//Nosso armazenamento geral do reducer
import { createStore } from "redux";
import rootReduce from "./root-reducer";

const store = createStore(rootReduce);

export default store;
