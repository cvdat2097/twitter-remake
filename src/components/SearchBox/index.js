import React from 'react';

import searchSVG from '../../assets/svg/icons/search.svg';
import closeSVG from '../../assets/svg/icons/close.svg';

import './SearchBox.scss';

const INITIAL_STATE = {
    keyword: '',
};

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        const { value } = this.props;
        value && (this.state.keyword = value);

        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleClearKeyword = this.handleClearKeyword.bind(this);
    }

    handleClearKeyword() {
        this.setState({
            keyword: '',
        });
    }

    handleKeywordChange(event) {
        const { onChange } = this.props;

        this.setState({
            keyword: event.target.value,
        });

        onChange && onChange(event);
    }

    render() {
        const { keyword } = this.state;
        const { placeholder } = this.props;

        return (
            <div className="tw-search-box position-relative">
                <img
                    src={searchSVG}
                    className="search-icon position-absolute "
                    alt=""
                    width="20"
                    height="20"
                />

                <input
                    className={`form-control rounded-pill bg-light px-5 ${
                        keyword.length ? 'bg-transparent' : ''
                    }`}
                    type="text"
                    placeholder={placeholder}
                    value={keyword}
                    onChange={this.handleKeywordChange}
                />

                <button
                    className={`clear-icon btn btn-primary btn-sm rounded-circle ${
                        keyword.length ? '' : 'd-none'
                    }`}
                    onClick={this.handleClearKeyword}
                >
                    <img src={closeSVG} alt="" width="10" height="10" />
                </button>
            </div>
        );
    }
}

export default SearchBox;
