import Types from './type';
import { TWEETS_ORDER } from '../../constants/tweet';

export default {
    sortTweets: order => {
        let invalidType = false;
        Object.keys(TWEETS_ORDER).forEach(type => {
            if (TWEETS_ORDER[type] === order) {
                invalidType = true;
            }
        });

        if (!invalidType) {
            throw new Error('Invalid Tweet Sorting Type');
        }

        return {
            type: Types.CHANGE_TWEETS_ORDER,
            order,
        };
    },
};
