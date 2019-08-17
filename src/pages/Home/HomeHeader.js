import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../../components/utils/Button';
import { Popover, PopoverPosition } from '../../components/utils/Popover';
import TweetsOrderSelector from '../../components/tweet/TweetsOrderSelector';

import { TWEETS_ORDER } from '../../constants/tweets';
import Actions from '../../core/tweets/action';

import topTweet from '../../assets/svg/top-tweet.svg';

const INITIAL_STATE = {
    popoverTweetsVisible: false,
};

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        this.openTweetsPopover = this.openTweetsPopover.bind(this);
        this.closeTweetsPopover = this.closeTweetsPopover.bind(this);
    }

    openTweetsPopover() {
        this.setState({
            popoverTweetsVisible: true,
        });
    }

    closeTweetsPopover() {
        this.setState({
            popoverTweetsVisible: false,
        });
    }

    render() {
        const { caption, sortTweets, tweetsOrder } = this.props;
        const { popoverTweetsVisible } = this.state;

        return (
            <div className="h-100 d-flex align-items-center p-3">
                <h1 className="h5 m-0 font-weight-bold">{caption}</h1>

                <div className="position-relative ml-auto">
                    <Button
                        onClick={() => {
                            this.openTweetsPopover();
                        }}
                        icon={topTweet}
                    />

                    <Popover
                        visible={popoverTweetsVisible}
                        onClose={this.closeTweetsPopover}
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
    }
}

const getCaptionFromTweetsOrder = tweetsOrder => {
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
    let caption = getCaptionFromTweetsOrder(tweetsOrder);

    return {
        tweetsOrder,
        caption,
    };
};
const mapDispatchToProps = dispatch => ({
    sortTweets(order) {
        dispatch(Actions.changeTweetsOrder(order));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHeader);
