import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuItem, MenuDivider } from '../utils/Menu';

import { TWEETS_ORDER } from '../../constants/tweet';

import defaultSVG from '../../assets/svg/tweetsOrder/tweetsOrder-default.svg';
import lastestSVG from '../../assets/svg/tweetsOrder/tweetsOrder-lastest.svg';
import exportSVG from '../../assets/svg/icons/export.svg';
import settingsSVG from '../../assets/svg/icons/settings.svg';

import { trans } from '../../lib/transtor';

const getDisplayData = (tweetsOrder, sortTweets) => {
    switch (tweetsOrder) {
        case TWEETS_ORDER.LASTEST:
            return {
                caption: trans('home.header.caption.lastest'),
                icon: lastestSVG,
                handleTweetOrderChange: () => sortTweets(TWEETS_ORDER.DEFAULT),
                option: {
                    title: trans('home.header.switch.caption.default'),
                    description: trans(
                        'home.header.switch.description.default'
                    ),
                },
            };

        default:
        case TWEETS_ORDER.DEFAULT:
            return {
                caption: trans('home.header.caption.default'),

                icon: defaultSVG,
                handleTweetOrderChange: () => sortTweets(TWEETS_ORDER.LASTEST),
                option: {
                    title: trans('home.header.switch.caption.lastest'),
                    description: trans(
                        'home.header.switch.description.lastest'
                    ),
                },
            };
    }
};

const TweetsOrderSelector = props => {
    const { tweetsOrder, sortTweets } = props;

    const {
        caption,
        icon,
        option: { title, description },
        handleTweetOrderChange,
    } = getDisplayData(tweetsOrder, sortTweets);

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
                <MenuDivider />
                <MenuItem
                    icon={exportSVG}
                    title={title}
                    description={description}
                    onClick={handleTweetOrderChange}
                />
                <MenuItem icon={settingsSVG} title="View content preferences" />
            </Menu>
        </div>
    );
};

TweetsOrderSelector.propTypes = {
    tweetsOrder: PropTypes.oneOf([TWEETS_ORDER.DEFAULT, TWEETS_ORDER.LASTEST])
        .isRequired,
    sortTweets: PropTypes.func.isRequired,
};

export default TweetsOrderSelector;
