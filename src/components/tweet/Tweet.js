import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { trans } from '../../lib/transtor';
import { Button } from '../utils/Button';
import { Menu, MenuItem } from '../utils/Menu';
import { Popover, PopoverPosition } from '../utils/Popover';

import { MEDIA_TYPE } from '../../constants/tweet';

import { ReactComponent as DownSVG } from '../../assets/svg/icons/down.svg';
import { ReactComponent as CommentSVG } from '../../assets/svg/icons/comment.svg';
import { ReactComponent as RetweetSVG } from '../../assets/svg/icons/retweet.svg';
import { ReactComponent as LikeSVG } from '../../assets/svg/icons/like.svg';
import { ReactComponent as ShareSVG } from '../../assets/svg/icons/share.svg';
import { ReactComponent as AnalyticSVG } from '../../assets/svg/icons/analytic.svg';
import verifiedSvg from '../../assets/svg/icons/verified-account.svg';
import sadEmoticonSvg from '../../assets/svg/icons/sad-emoticon.svg';
import embedSvg from '../../assets/svg/icons/embed.svg';
import unfollowSvg from '../../assets/svg/icons/unfollow.svg';
import muteSvg from '../../assets/svg/icons/mute.svg';
import blockSvg from '../../assets/svg/icons/block.svg';
import reportSvg from '../../assets/svg/icons/report.svg';

import style from '../../stylesheet/theme-blue.scss';

const TweetMedia = props => {
    const { mediaType, media } = props;

    switch (mediaType) {
        case MEDIA_TYPE.IMAGE:
            return (
                <div
                    className="position-relative clickable"
                    style={{ maxWidth: style.maxInnerPostWidth }}
                >
                    <img
                        className="img-fluid rounded-lg border"
                        src={media}
                        alt=""
                    />
                </div>
            );

        case MEDIA_TYPE.TEXT:
        default:
            return null;
    }
};

const Tweet = props => {
    const {
        user: { name, username, isVerified, avatar },
        post: { time, mediaType, content, media, likes, comments },
    } = props;

    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleOpenMenuClick = () => {
        setMenuVisibility(true);
    };

    const handlePopoverClose = () => {
        setMenuVisibility(false);
    };

    return (
        <div className="d-flex border-bottom mb-2 p-2">
            <div
                style={{
                    flexShrink: 0,
                    minWidth: 25,
                    width: '20vw',
                    maxWidth: 60,
                    maxHeight: 60,
                }}
            >
                <img className="rounded-circle img-fluid" src={avatar} alt="" />
            </div>

            <div className="p-1 w-100">
                <div className="d-flex">
                    <span className="font-weight-bold medium mr-1">{name}</span>
                    {isVerified ? (
                        <img
                            className="align-baseline"
                            src={verifiedSvg}
                            alt=""
                            width="16"
                            height="16"
                        />
                    ) : null}
                    <span className="text-secondary medium ml-1">
                        @{username}
                    </span>
                    <span className="text-secondary medium">
                        &nbsp;· {time}
                    </span>

                    <div className="ml-auto position-relative">
                        <Button
                            className="small"
                            icon={<DownSVG />}
                            onClick={handleOpenMenuClick}
                        />

                        <Popover
                            visible={menuVisibility}
                            position={PopoverPosition.TOP_RIGHT}
                            onClose={handlePopoverClose}
                        >
                            <Menu>
                                <MenuItem
                                    className="text-nowrap small"
                                    title={trans('tweet.menu.less')}
                                    icon={sadEmoticonSvg}
                                />
                                <MenuItem
                                    className="text-nowrap small"
                                    title={trans('tweet.menu.embed')}
                                    icon={embedSvg}
                                />
                                <MenuItem
                                    className="text-nowrap small"
                                    title={trans(
                                        'tweet.menu.unfollow',
                                        username
                                    )}
                                    icon={unfollowSvg}
                                />
                                <MenuItem
                                    className="text-nowrap small"
                                    title={trans('tweet.menu.mute', username)}
                                    icon={muteSvg}
                                />
                                <MenuItem
                                    className="text-nowrap small"
                                    title={trans('tweet.menu.block', username)}
                                    icon={blockSvg}
                                />

                                <MenuItem
                                    className="text-nowrap small"
                                    title={trans('tweet.menu.report')}
                                    icon={reportSvg}
                                />
                            </Menu>
                        </Popover>
                    </div>
                </div>
                <div className="medium mb-2">{content}</div>

                <TweetMedia mediaType={mediaType} media={media} />

                <div
                    className="d-flex justify-content-between mt-3"
                    style={{ maxWidth: style.maxInnerPostWidth }}
                >
                    <Button
                        className="small text-secondary position-relative"
                        icon={<CommentSVG />}
                    >
                        <span
                            className="position-absolute small"
                            style={{ left: '100%' }}
                        >
                            {comments}
                        </span>
                    </Button>
                    <Button
                        className="small"
                        icon={<RetweetSVG />}
                        type="success"
                    />
                    <Button
                        className="small text-secondary position-relative"
                        icon={<LikeSVG />}
                        type="danger"
                    >
                        <span
                            className="position-absolute small"
                            style={{ left: '100%' }}
                        >
                            {likes}
                        </span>
                    </Button>
                    <Button className="small" icon={<ShareSVG />} />
                    <Button className="small" icon={<AnalyticSVG />} />
                </div>
            </div>
        </div>
    );
};

Tweet.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        isVerified: PropTypes.bool,
        avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),

    post: PropTypes.shape({
        time: PropTypes.string.isRequired,
        mediaType: PropTypes.oneOf([MEDIA_TYPE.TEXT, MEDIA_TYPE.IMAGE])
            .isRequired,
        content: PropTypes.string,
        media: PropTypes.oneOfType([PropTypes.string]),
        likes: PropTypes.string,
        comments: PropTypes.string,
    }),
};

Tweet.defaultProps = {
    user: {
        name: '',
        username: '',
        isVerified: false,
        avatar: '/img/default-avatar.png',
    },

    post: {
        time: '',
        mediaType: MEDIA_TYPE.TEXT,
        content: '',
        media: null,
    },
};

export default Tweet;
