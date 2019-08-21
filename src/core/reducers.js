import { combineReducers } from 'redux';

import search from './search/reducer';
import tweets from './tweets/reducer';
import account from './account/reducer';

export default combineReducers({ search, tweets, account });
