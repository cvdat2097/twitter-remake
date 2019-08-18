import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../core/tweets/action';

import NavBar from './NavBar';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import SearchBar from '../../components/SearchBar';
import TrendsList from '../../components/TrendsList';
import FollowSuggestion from '../../components/FollowSuggestion';
import TweetComposer from '../../components/tweet/TweetComposer';
import Tweet from '../../components/tweet/Tweet';

import './home.scss';

import { TWEETS } from '../../mock/tweet';

class Home extends React.Component {
    render() {
        return (
            <div id="home-page-container" className="row no-gutters">
                <div className="col-auto col-xl-3">
                    <NavBar />
                </div>
                <div className="col col-sm border-left border-right">
                    <section id="main">
                        <div className="tw-header border-bottom">
                            <HomeHeader />
                        </div>

                        <div className="d-flex flex-column">
                            <div className="d-none d-md-block">
                                <TweetComposer />

                                <div
                                    className="bg-light d-inline-block w-100"
                                    style={{
                                        height: 10,
                                    }}
                                />
                            </div>

                            <div>
                                {TWEETS.map(({ user, post }, index) => (
                                    <Tweet
                                        key={index}
                                        user={user}
                                        post={post}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <section id="suggestion">
                        <div className="tw-header p-2">
                            <SearchBar />
                        </div>
                        <div className="p-2">
                            <TrendsList />
                        </div>
                        <div className="p-2">
                            <FollowSuggestion />
                        </div>
                    </section>

                    <HomeFooter />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ tweets: state.tweets });
const mapDispatchToProps = dispatch => ({
    sortTweets(order) {
        dispatch(Actions.changeTweetsOrder(order));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
