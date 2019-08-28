import Types from './type';
import AsyncTypes from './asyncType';

export default {
    search: keyword => ({
        type: AsyncTypes.SEARCH,
        isAsync: true,
        keyword,
    }),

    gotSearchResults: results => ({
        type: Types.GOT_SEARCH_RESULTS,
        results,
    }),
};
