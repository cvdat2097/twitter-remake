import actionTypes from './type';

const INITIAL_STATE = {
    tweetMessage: '',
};

const homePageReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        case actionTypes.TWEET:
            console.log(state);
            return {
                tweetMessage: action.message,
            };

        default:
            return state;
    }
};

export default homePageReducer;
