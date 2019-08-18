import React from 'react';

import { Button } from '../utils/Button';

import { ReactComponent as DownSVG } from '../../assets/svg/icons/down.svg';
import { ReactComponent as CommentSVG } from '../../assets/svg/icons/comment.svg';
import { ReactComponent as RetweetSVG } from '../../assets/svg/icons/retweet.svg';
import { ReactComponent as LikeSVG } from '../../assets/svg/icons/like.svg';
import { ReactComponent as ShareSVG } from '../../assets/svg/icons/share.svg';
import { ReactComponent as AnalyticSVG } from '../../assets/svg/icons/analytic.svg';
import verifiedSvg from '../../assets/svg/icons/verified-account.svg';

import style from '../../stylesheet/style.scss';

const TweetMedia = props => {
    const { mediaType, media } = props;

    if (mediaType === 'image') {
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
    }

    return null;
};

const Tweet = props => {
    const {
        user: { name, username, isVerified, avatar },
        post: { time, mediaType, content, media, likes, comments },
    } = props;

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
                    <Button className="small ml-auto" icon={<DownSVG />} />
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

export default Tweet;
