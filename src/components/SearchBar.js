import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SearchBox } from './utils/SearchBox';

import SearchActions from '../core/search/action';

const SearchBar = props => {
    const { results, search } = props;

    return (
        <SearchBox
            results={results}
            onChange={keyword => keyword && search(keyword)}
            placeholder="Search Twitter"
        />
    );
};

SearchBar.propTypes = {
    results: PropTypes.object,
    gotSearchResults: PropTypes.func,
};

const mapStateToProps = ({ search: { results } }) => ({
    results,
});
const mapDispatchToProps = {
    gotSearchResults: SearchActions.gotSearchResults,
    search: SearchActions.search,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
