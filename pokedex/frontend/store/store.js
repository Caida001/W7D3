import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {createStore} from "redux";
import {applyMiddleware} from "redux";

import {rootReducer} from "../reducers/root_reducer";

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));
