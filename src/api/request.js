import ROUTES from './routes';
import { SEARCH_RESULTS } from '../mock/search';

const mockRequest = (_method, url, payload) => {
    let response = null;

    switch (url) {
        case ROUTES.SEARCH:
            const keyword = payload;

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
        }, 1000);
    });
};

export default mockRequest;

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
