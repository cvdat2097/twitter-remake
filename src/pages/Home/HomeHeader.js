import React from 'react';
import { connect } from 'react-redux';
import Actions from './model/action';

import { TWEETS_ORDER } from '../../constants/Tweets';
import topTweet from '../../assets/svg/top-tweet.svg';

import Button from '../../components/Button';
import Popover, { PopoverPosition } from '../../components/Popover';

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
        const {
            sortTweets,
            home: { tweetsOrder },
        } = this.props;

        const { popoverTweetsVisible } = this.state;

        return (
            <div className="h-100 d-flex align-items-center p-3">
                <h1 className="h5 m-0 font-weight-bold">Home</h1>
                {tweetsOrder.toString()}
                <div className="position-relative ml-auto">
                    <Button
                        onClick={() => {
                            this.openTweetsPopover();
                            sortTweets(TWEETS_ORDER.LASTEST);
                        }}
                        icon={topTweet}
                    />

                    <Popover
                        visible={popoverTweetsVisible}
                        onClose={this.closeTweetsPopover}
                        position={PopoverPosition.TOP_RIGHT}
                    >
                        <div className="card">
                            <div className="card-body">hihi</div>
                        </div>
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
