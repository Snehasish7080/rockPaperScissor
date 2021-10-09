import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const enhancer = compose(applyMiddleware(...middleware));

export const store = createStore(RootReducer, enhancer);
