import ActionType from './type';

export default {
    gotSearchResults: results => ({
        type: ActionType.GOT_SEARCH_RESULTS,
        results,
    }),
};
