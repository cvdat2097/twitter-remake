import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TweetActions from '../../core/tweets/action';

import { Divider } from '../../components/utils/Divider';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import SearchBar from '../../components/SearchBar';
import TrendsWidget from '../../components/trends/TrendsWidget';
import FollowSuggestion from '../../components/FollowSuggestion';
import TweetComposer from '../../components/tweet/TweetComposer';
import Tweet from '../../components/tweet/Tweet';

import { TWEETS } from '../../mock/tweet';
import { TRENDS } from '../../mock/trends';

import './homepage.scss';

const Home = () => {
    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top">
                        <HomeHeader />
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-none d-md-block">
                            <TweetComposer />

                            <Divider />
                        </div>

                        <div>
                            {TWEETS.map(({ user, post }, index) => (
                                <Tweet key={index} user={user} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <section id="suggestion">
                    <div className="tw-header p-2 bg-white position-sticky fixed-top">
                        <SearchBar />
                    </div>
                    <div className="p-2">
                        <TrendsWidget trends={TRENDS} />
                    </div>
                    <div className="p-2">
                        <FollowSuggestion />
                    </div>
                </section>

                <HomeFooter />
            </div>
        </div>
    );
};

const mapStateToProps = ({ tweets }) => ({ tweets });
const mapDispatchToProps = {
    sortTweets: TweetActions.sortTweets,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
