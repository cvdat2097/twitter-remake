import { combineAsyncReducers } from '../lib/redux-async';
import searchAsyncReducer from './search/asyncReducer';

export default combineAsyncReducers([searchAsyncReducer]);
