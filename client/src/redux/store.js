import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from 'redux-persist';
import thunk from "redux-thunk";
import logger from "redux-logger"
import persistReducer from "./reducers/index";

const middlewares = [thunk, logger];


export const store = createStore(
    persistReducer,
    applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);