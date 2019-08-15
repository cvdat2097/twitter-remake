import actionTypes from './type';

export default {
    tweetMessage: message => ({
        type: actionTypes.TWEET,
        message,
    }),
};
