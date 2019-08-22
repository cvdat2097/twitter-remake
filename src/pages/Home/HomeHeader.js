import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '../../components/utils/Button';
import { Popover, PopoverPosition } from '../../components/utils/Popover';
import TweetsOrderSelector from '../../components/tweet/TweetsOrderSelector';

import { TWEETS_ORDER } from '../../constants/tweet';
import TweetActions from '../../core/tweets/action';

import topTweet from '../../assets/svg/top-tweet.svg';

const HomeHeader = props => {
    const { caption, sortTweets, tweetsOrder } = props;
    const [orderVisibility, setOrderVisibility] = useState(false);

    const handleTweetsOrderClick = () => {
        setOrderVisibility(true);
    };

    const handleTweetsPopoverClose = () => {
        setOrderVisibility(false);
    };

    return (
        <div className="h-100 d-flex align-items-center p-3">
            <h1 className="h5 m-0 font-weight-bold">{caption}</h1>

            <div className="position-relative ml-auto">
                <Button onClick={handleTweetsOrderClick} icon={topTweet} />

                <Popover
                    visible={orderVisibility}
                    onClose={handleTweetsPopoverClose}
                    position={PopoverPosition.TOP_RIGHT}
                >
                    <TweetsOrderSelector
                        sortTweets={sortTweets}
                        tweetsOrder={tweetsOrder}
                    />
                </Popover>
            </div>
        </div>
    );
};

const getCaptionFromTweetsOrder = tweetsOrder => {
    switch (tweetsOrder) {
        case TWEETS_ORDER.LASTEST:
            return 'Lastest Tweets';

        case TWEETS_ORDER.DEFAULT:
        default:
            return 'Home';
    }
};

HomeHeader.propTypes = {
    caption: PropTypes.string,
    tweetsOrder: PropTypes.oneOf([TWEETS_ORDER.DEFAULT, TWEETS_ORDER.LASTEST]),
    sortTweets: PropTypes.func,
};

const mapStateToProps = ({ tweets }) => {
    const { tweetsOrder } = tweets;
    let caption = getCaptionFromTweetsOrder(tweetsOrder);

    return {
        tweetsOrder,
        caption,
    };
};
const mapDispatchToProps = {
    sortTweets: TweetActions.sortTweets,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHeader);
