import { SEARCH_RESULTS } from '../mock/search';

const delay = response => {
    const requestDelay = 1000;

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(response);
        }, requestDelay);
    });
};

export default {
    search: async keyword => {
        if (keyword) {
            return await delay(SEARCH_RESULTS);
        }

        return null;
    },
};

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
