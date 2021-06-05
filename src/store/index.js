import {createStore, compose, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import AppReducer from "./reducers";

const initState = {
    items: null,
    favourites: null,
    cart: null,
    
}

const devTools = process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : (a) => a;

export const Store = createStore(AppReducer, initState, compose(
    applyMiddleware(thunk),
    devTools
));