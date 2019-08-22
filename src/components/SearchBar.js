import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SearchBox } from './utils/SearchBox';

import SearchActions from '../core/search/action';
import request, { METHOD } from '../api/request';
import ROUTES from '../api/routes';

const search = async (keyword, callback) => {
    const results = await request(METHOD.GET, ROUTES.SEARCH, keyword);

    callback(results);
};

const SearchBar = props => {
    const { results, gotSearchResults } = props;

    return (
        <SearchBox
            results={results}
            onChange={keyword => keyword && search(keyword, gotSearchResults)}
            placeholder="Search Twitter"
        />
    );
};

SearchBar.propTypes = {
    results: PropTypes.object,
    gotSearchResults: PropTypes.func,
};

const mapStateToProps = ({ search }) => ({
    results: search.results,
});
const mapDispatchToProps = {
    gotSearchResults: SearchActions.gotSearchResults,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
