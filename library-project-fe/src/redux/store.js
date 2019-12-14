import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux';

import reducers from './reducers'


// middlewares
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const combinedReducers = combineReducers(reducers);

let store = createStore(
    combinedReducers,
    applyMiddleware(logger, thunk)
);

export default store;