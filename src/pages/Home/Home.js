import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useVisibility } from '../../components/hooks';
import TweetActions from '../../core/tweets/action';

import { Divider } from '../../components/utils/Divider';
import { Widget } from '../../components/utils/Widget';
import { Popover, PopoverPosition } from '../../components/utils/Popover';
import PageHeader from '../PageHeader';
import AppFooter from '../AppFooter';
import SearchBar from '../../components/SearchBar';
import TrendsList from '../../components/trends/TrendsList';
import FollowSuggestion from '../../components/FollowSuggestion';
import TweetComposer from '../../components/tweet/TweetComposer';
import TweetsOrderSelector from '../../components/tweet/TweetsOrderSelector';
import Tweet from '../../components/tweet/Tweet';
import { TWEETS_ORDER } from '../../constants/tweet';

import { TWEETS } from '../../mock/tweet';
import { TRENDS } from '../../mock/trends';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';

import './homepage.scss';

const Home = props => {
    const { sortTweets, tweetsOrder, title } = props;
    const [orderVisibility, showOrderPopover, hideOrderPopover] = useVisibility(
        false
    );

    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <PageHeader
                            title={title}
                            btnIcon={
                                <SettingsSVG className="svg-fill-primary" />
                            }
                            btnOnClick={showOrderPopover}
                        >
                            <Popover
                                visible={orderVisibility}
                                onClose={hideOrderPopover}
                                position={PopoverPosition.TOP_RIGHT}
                            >
                                <TweetsOrderSelector
                                    sortTweets={sortTweets}
                                    tweetsOrder={tweetsOrder}
                                />
                            </Popover>
                        </PageHeader>
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
                <div className="tw-header p-2 bg-white position-sticky fixed-top">
                    <SearchBar />
                </div>
                <div className="p-2">
                    <Widget>
                        <TrendsList trends={TRENDS} displaySettings />
                    </Widget>
                </div>
                <div className="p-2">
                    <Widget>
                        <FollowSuggestion />
                    </Widget>
                </div>

                <AppFooter />
            </div>
        </div>
    );
};

const getTitleFromTweetsOrder = tweetsOrder => {
    switch (tweetsOrder) {
        case TWEETS_ORDER.LASTEST:
            return 'Lastest Tweets';

        case TWEETS_ORDER.DEFAULT:
        default:
            return 'Home';
    }
};

const mapStateToProps = ({ tweets }) => {
    const { tweetsOrder } = tweets;
    let title = getTitleFromTweetsOrder(tweetsOrder);

    return {
        tweetsOrder,
        title,
    };
};
const mapDispatchToProps = {
    sortTweets: TweetActions.sortTweets,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
