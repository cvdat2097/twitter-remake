import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult';

import searchSVG from '../../../assets/svg/icons/search.svg';
import closeSVG from '../../../assets/svg/icons/close.svg';
import './search.scss';

const SearchBox = props => {
    const { placeholder, results, onChange } = props;

    const [keyword, setKeyword] = useState('');
    const [resultVisibility, setResultVisibility] = useState(false);

    const clearHandler = () => {
        setKeyword('');
    };

    const handleInputChange = event => {
        setKeyword(event.target.value);

        onChange && onChange(event.target.value);
    };

    const handleInputFocus = () => {
        setResultVisibility(true);
    };

    const handleSearchResultClose = () => {
        setResultVisibility(false);
    };

    return (
        <div className="tw-search-input position-relative">
            <img
                src={searchSVG}
                className="search-icon position-absolute "
                alt=""
                width="18"
                height="18"
            />

            <input
                className="form-control rounded-pill bg-light px-5 py-0"
                type="text"
                placeholder={placeholder}
                value={keyword}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />

            <button
                className={`clear-icon btn btn-primary btn-sm rounded-circle ${
                    keyword.length ? '' : 'd-none'
                }`}
                onClick={clearHandler}
            >
                <img src={closeSVG} alt="" width="10" height="10" />
            </button>

            <SearchResult
                keyword={keyword}
                visible={resultVisibility}
                results={results}
                onClose={handleSearchResultClose}
            />
        </div>
    );
};

SearchBox.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    results: PropTypes.object,
};

export default SearchBox;
