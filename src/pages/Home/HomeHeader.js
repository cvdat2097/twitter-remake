import React from 'react';
import { connect } from 'react-redux';
import Actions from './model/action';

import { TWEETS_ORDER } from '../../constants/Tweets';
import Button from '../../components/Button';
import topTweet from '../../assets/svg/top-tweet.svg';

class HomeHeader extends React.Component {
    render() {
        const {
            sortTweets,
            home: { tweetsOrder },
        } = this.props;

        return (
            <div className="h-100 d-flex align-items-center p-3">
                <h1 className="h5 m-0 font-weight-bold">Home</h1>
                {tweetsOrder.toString()}
                <Button
                    onClick={() => {
                        sortTweets(TWEETS_ORDER.LASTEST);
                    }}
                    className="ml-auto"
                    icon={topTweet}
                />
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
