import ACTION_TYPE from './type';
import { TWEETS_ORDER } from '../../constants/tweets';

export default {
    changeTweetsOrder: order => {
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
            type: ACTION_TYPE.CHANGE_TWEETS_ORDER,
            order,
        };
    },
};
