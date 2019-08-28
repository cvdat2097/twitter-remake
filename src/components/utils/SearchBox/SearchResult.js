import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Popover, PopoverPosition } from '../../utils/Popover';
import { AccountSummary } from '../AccountSummary';

import './search.scss';

const TopicResult = props => {
    const { topic } = props;

    return (
        <Link
            to={`/search?p=${topic}`}
            className="search-result p-2 font-weight-bold border-bottom clickable text-dark d-block"
        >
            {topic}
        </Link>
    );
};

const TextResult = props => {
    const { text } = props;

    return <div className="p-2 clickable">{text}</div>;
};

const generateTopipcResults = results => {
    if (!results) {
        return null;
    }

    return results.map(({ topic }, index) => (
        <TopicResult key={index} topic={topic} />
    ));
};

const generateAccountResults = results => {
    if (!results) {
        return null;
    }

    return results.map(({ name, username, avatar, isVerified }, index) => (
        <AccountSummary
            className="border-bottom p-2 clickable"
            key={index}
            name={name}
            username={username}
            avatar={avatar}
            isVerified={isVerified}
        />
    ));
};

const SearchResult = props => {
    const { results, keyword, visible, onClose } = props;
    const { topics, accounts } = results;

    return (
        <Popover
            style={{
                top: 'calc(100% + 5px)',
                width: '100%',
            }}
            onClose={onClose}
            position={PopoverPosition.CUSTOM}
            visible={visible}
        >
            <div className="d-flex flex-column w-100">
                {keyword && (topics || accounts) ? (
                    <>
                        <div className="topic-results">
                            {generateTopipcResults(topics)}
                        </div>

                        <div
                            className="bg-light d-inline-block w-100"
                            style={{
                                height: 8,
                            }}
                        />

                        <div className="account-results">
                            {generateAccountResults(accounts)}
                        </div>

                        <div>
                            <TextResult text={`Go to @${keyword}`} />
                        </div>
                    </>
                ) : (
                    <div className="text-muted small text-center p-3">
                        Try searching for people, topics, or keywords
                    </div>
                )}
            </div>
        </Popover>
    );
};

SearchResult.propTypes = {
    className: PropTypes.string,
    results: PropTypes.shape({
        topics: PropTypes.array,
        accounts: PropTypes.array,
    }),
    keyword: PropTypes.string,
};

export default SearchResult;
