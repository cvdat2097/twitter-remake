import ACTION_TYPE from './type';

const INITIAL_STATE = {
    results: {},
};

export default (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        case ACTION_TYPE.GOT_SEARCH_RESULTS:
            return {
                results: action.results,
            };

        default:
            return state;
    }
};
