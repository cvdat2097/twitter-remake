import { createStore, combineReducers } from 'redux';

import home from '../pages/Home/model/reducer';

const store = createStore(combineReducers({ home }));

export default store;
