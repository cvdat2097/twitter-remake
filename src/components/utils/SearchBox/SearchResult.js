import React from 'react';

import verifiedSvg from '../../../assets/svg/icons/verified-account.svg';
import './search.scss';

const TopicResult = props => {
    const { topic } = props;

    return <div className="p-2 font-weight-bold border-bottom">{topic}</div>;
};

const TextResult = props => {
    const { text } = props;

    return <div className="p-2">{text}</div>;
};

const AccountResult = props => {
    const { name, username, avatar, isVerified } = props;

    return (
        <div className="d-flex p-2 border-bottom">
            <img
                src={avatar}
                className="rounded-circle mr-2"
                alt=""
                width="50"
                height="50"
            />
            <div className="d-flex flex-column">
                <div>
                    <span className="font-weight-bold">{name}</span>{' '}
                    {isVerified ? (
                        <img
                            className="align-baseline"
                            src={verifiedSvg}
                            alt=""
                            width="16"
                            height="16"
                        />
                    ) : null}
                </div>
                <div className="text-secondary small">@{username}</div>
            </div>
        </div>
    );
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

        return results.map((r, index) => <AccountResult key={index} {...r} />);
    }

    render() {
        const { className, results, keyword } = this.props;

        return (
            <div className={'tw-search-result card shadow ' + className}>
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
