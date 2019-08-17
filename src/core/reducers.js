import { combineReducers } from 'redux';

import search from './search/reducer';
import tweets from './tweets/reducer';

export default combineReducers({ search, tweets });
