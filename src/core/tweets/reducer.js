import Types from './type';
import { TWEETS_ORDER } from '../../constants/tweet';

const INITIAL_STATE = {
    tweetsOrder: TWEETS_ORDER.DEFAULT,
};

const homePageReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        case Types.CHANGE_TWEETS_ORDER:
            return {
                tweetsOrder: action.order,
            };

        default:
            return state;
    }
};

export default homePageReducer;
