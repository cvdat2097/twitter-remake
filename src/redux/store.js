import { createStore, combineReducers } from 'redux';

import home from '../pages/Home/model/reducer';
import search from './reducer/searchReducer';

const store = createStore(combineReducers({ home, search }));

export default store;
