import Request from './../../api/request';
import AsyncTypes from './asyncType';
import Actions from './action';

export default async ({ dispatch }, action) => {
    const { type } = action;

    switch (type) {
        case AsyncTypes.SEARCH: {
            const { keyword } = action;

            const response = await Request.search(keyword);

            dispatch(Actions.gotSearchResults(response));

            break;
        }

        default:
            console.warn('Async Action not found');
    }
};
