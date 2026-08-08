import { combineReducers } from "redux";
import cartReducer from "./reducers/cart/cart-reducer";
import categoryReducer from "./reducers/category/category-reducer";
import userReducer from "./toolkit/user/user.slice";

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
