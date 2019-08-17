import React from 'react';
import { connect } from 'react-redux';

import SearchBox from './utils/SearchBox';

import Actions from '../core/search/action';
import request, { METHOD } from '../api/request';
import ROUTES from '../api/routes';

class SearchBar extends React.Component {
    async search(keyword) {
        const { gotResults } = this.props;
        const results = await request(METHOD.GET, ROUTES.SEARCH, keyword);

        gotResults(results);
    }

    render() {
        const { results } = this.props;

        return (
            <SearchBox
                results={results}
                onChange={keyword => keyword && this.search(keyword)}
                placeholder="Search Twitter"
            />
        );
    }
}

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
