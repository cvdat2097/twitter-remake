import ACTION_TYPE from './type';

export default {
    gotSearchResults: results => ({
        type: ACTION_TYPE.GOT_SEARCH_RESULTS,
        results,
    }),
};
