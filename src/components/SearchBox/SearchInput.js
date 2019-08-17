import React from 'react';

import SearchResult from './SearchResult';

import searchSVG from '../../assets/svg/icons/search.svg';
import closeSVG from '../../assets/svg/icons/close.svg';

import './SearchBox.scss';

const INITIAL_STATE = {
    keyword: '',
    resultVisible: false,
};

class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        const { value } = this.props;
        value && (this.state.keyword = value);

        this.changeKeyword = this.changeKeyword.bind(this);
        this.clearKeyword = this.clearKeyword.bind(this);
        this.showResult = this.showResult.bind(this);
        this.hideResult = this.hideResult.bind(this);
    }

    clearKeyword() {
        this.setState({
            keyword: '',
        });
    }

    changeKeyword(event) {
        const { onChange } = this.props;
        const { value: keyword } = event.target;

        this.setState({
            keyword,
        });

        onChange && onChange(keyword);
    }

    showResult() {
        this.setState({
            resultVisible: true,
        });
    }

    hideResult() {
        this.setState({
            resultVisible: false,
        });
    }

    render() {
        const { keyword, resultVisible } = this.state;
        const { placeholder, results } = this.props;

        return (
            <div className="tw-search-input position-relative">
                <img
                    src={searchSVG}
                    className="search-icon position-absolute "
                    alt=""
                    width="20"
                    height="20"
                />

                <input
                    className="form-control rounded-pill bg-light px-5"
                    type="text"
                    placeholder={placeholder}
                    value={keyword}
                    onChange={this.changeKeyword}
                    onFocus={this.showResult}
                    onBlur={this.hideResult}
                />

                <button
                    className={`clear-icon btn btn-primary btn-sm rounded-circle ${
                        keyword.length ? '' : 'd-none'
                    }`}
                    onClick={this.clearKeyword}
                >
                    <img src={closeSVG} alt="" width="10" height="10" />
                </button>

                <SearchResult
                    keyword={keyword}
                    className={resultVisible ? '' : 'd-none'}
                    results={results}
                />
            </div>
        );
    }
}

export default SearchInput;
