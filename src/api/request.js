import ROUTES from './routes';
import { SEARCH_RESULTS } from '../mock/search';

const mockRequest = (_method, url, payload) => {
    let response = null;
    const keyword = payload;
    const requestDelay = 1000;

    switch (url) {
        case ROUTES.SEARCH:
            if (keyword) {
                response = SEARCH_RESULTS;
            } else {
                response = {};
            }

            break;

        default:
            response = null;
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(response);
        }, requestDelay);
    });
};

export default mockRequest;

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
