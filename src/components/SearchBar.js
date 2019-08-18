import React from 'react';
import { connect } from 'react-redux';

import { SearchBox } from './utils/SearchBox';

import Actions from '../core/search/action';
import request, { METHOD } from '../api/request';
import ROUTES from '../api/routes';

const search = async (keyword, callback) => {
    const results = await request(METHOD.GET, ROUTES.SEARCH, keyword);

    callback(results);
};

const SearchBar = props => {
    const { results, gotResults } = props;

    return (
        <SearchBox
            results={results}
            onChange={keyword => keyword && search(keyword, gotResults)}
            placeholder="Search Twitter"
        />
    );
};

const mapStateToProps = ({ search }) => ({
    results: search.results,
});
const mapDispatchToProps = dispatch => ({
    gotResults: results => dispatch(Actions.gotSearchResults(results)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
