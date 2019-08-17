import React from 'react';
import { connect } from 'react-redux';

import Actions from '../../redux/action';
import request, { METHOD } from '../../api/request';
import ROUTES from '../../api/routes';

import SearchBox from '../../components/SearchBox';

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
