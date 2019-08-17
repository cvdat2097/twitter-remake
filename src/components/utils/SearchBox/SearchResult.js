import React from 'react';

import { AccountSummary } from '../AccountSummary';

import './search.scss';

const TopicResult = props => {
    const { topic } = props;

    return (
        <div className="p-2 font-weight-bold border-bottom clickable">
            {topic}
        </div>
    );
};

const TextResult = props => {
    const { text } = props;

    return <div className="p-2 clickable">{text}</div>;
};

class SearchResult extends React.Component {
    generateTopipcResults(results) {
        if (!results) {
            return null;
        }

        return results.map((r, index) => <TopicResult key={index} {...r} />);
    }

    generateAccountResults(results) {
        if (!results) {
            return null;
        }

        return results.map((r, index) => (
            <AccountSummary
                className="border-bottom p-2 clickable"
                key={index}
                {...r}
            />
        ));
    }

    render() {
        const { className, results, keyword } = this.props;

        return (
            <div
                className={
                    'tw-search-result card shadow ' +
                    (className ? className : '')
                }
            >
                <div className="card-body p-0">
                    {keyword &&
                    results &&
                    (results.topics || results.accounts) ? (
                        <>
                            <div className="topic-results">
                                {this.generateTopipcResults(results.topics)}
                            </div>

                            <hr className="m-0" />

                            <div className="account-results">
                                {this.generateAccountResults(results.accounts)}
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
            </div>
        );
    }
}

export default SearchResult;
