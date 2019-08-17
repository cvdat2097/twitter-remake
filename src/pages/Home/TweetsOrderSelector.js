import React from 'react';

import Menu, { MenuItem } from '../../components/utils/Menu';

import { TWEETS_ORDER } from '../../constants/tweets';

import defaultSVG from '../../assets/svg/tweetsOrder/tweetsOrder-default.svg';
import lastestSVG from '../../assets/svg/tweetsOrder/tweetsOrder-lastest.svg';
import exportSVG from '../../assets/svg/icons/export.svg';
import settingsSVG from '../../assets/svg/icons/settings.svg';

class TweetsOrderSelector extends React.Component {
    get textFromTweetsOrder() {
        const { tweetsOrder, sortTweets } = this.props;

        switch (tweetsOrder) {
            case TWEETS_ORDER.LASTEST:
                return {
                    caption: 'Latest Tweets show up as they happen',
                    icon: lastestSVG,
                    onClick: () => sortTweets(TWEETS_ORDER.DEFAULT),
                    option: {
                        title: 'Go back to Home',
                        description: 'You’ll see the top Tweets first.',
                    },
                };

            default:
            case TWEETS_ORDER.DEFAULT:
                return {
                    caption: 'Home shows you top Tweets first',
                    icon: defaultSVG,
                    onClick: () => sortTweets(TWEETS_ORDER.LASTEST),
                    option: {
                        title: 'See lastest Tweets instead',
                        description:
                            'You’ll be switched back Home after you’ve been away for a while.',
                    },
                };
        }
    }

    render() {
        const {
            caption,
            icon,
            option: { title, description },
            onClick,
        } = this.textFromTweetsOrder;

        return (
            <div className="card" style={{ width: 295 }}>
                <div
                    style={{ userSelect: 'none' }}
                    className="d-flex flex-column align-items-center p-3"
                >
                    <img src={icon} alt="" width="50" height="50" />
                    <span className="h5 font-weight-bold text-center px-3 mt-2">
                        {caption}
                    </span>
                </div>
                <Menu>
                    <MenuItem
                        icon={exportSVG}
                        title={title}
                        description={description}
                        onClick={onClick}
                    />
                    <MenuItem
                        icon={settingsSVG}
                        title="View content preferences"
                    />
                </Menu>
            </div>
        );
    }
}

export default TweetsOrderSelector;
