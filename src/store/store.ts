import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer, { RootState } from "./root-reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cartReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(logger), 
});

export const persistedStore = persistStore(store);

export type { RootState };
