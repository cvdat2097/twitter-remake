import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createAsyncMiddleware } from '../lib/redux-async';

import reducers from './reducers';
import asyncReducers from './asyncReducers';

const asyncMiddleware = createAsyncMiddleware(asyncReducers);

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(asyncMiddleware))
);

export default store;
