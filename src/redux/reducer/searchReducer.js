import ActionType from '../type';

const INITIAL_STATE = {
    results: {},
};

export default (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        case ActionType.GOT_SEARCH_RESULTS:
            return {
                results: action.results,
            };

        default:
            return state;
    }
};
