import React from 'react';
import { connect } from 'react-redux';
import Actions from './model/action';

import Button from '../../components/Button';
import Popover, { PopoverPosition } from '../../components/Popover';
import TweetsOrderSelector from './TweetsOrderSelector';

import topTweet from '../../assets/svg/top-tweet.svg';
import { TWEETS_ORDER } from '../../constants/Tweets';

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

    get caption() {
        const {
            home: { tweetsOrder },
        } = this.props;

        switch (tweetsOrder) {
            case TWEETS_ORDER.LASTEST:
                return 'Lastest Tweets';

            case TWEETS_ORDER.DEFAULT:
            default:
                return 'Home';
        }
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
        const {
            sortTweets,
            home: { tweetsOrder },
        } = this.props;

        const { popoverTweetsVisible } = this.state;

        return (
            <div className="h-100 d-flex align-items-center p-3">
                <h1 className="h5 m-0 font-weight-bold">{this.caption}</h1>

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

const mapStateToProps = state => ({ home: state.home });
const mapDispatchToProps = dispatch => ({
    sortTweets(order) {
        dispatch(Actions.changeTweetsOrder(order));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHeader);
