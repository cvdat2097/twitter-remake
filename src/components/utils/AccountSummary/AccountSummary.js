import React from 'react';

import verifiedSvg from '../../../assets/svg/icons/verified-account.svg';

const AccountSummary = ({ name, username, avatar, isVerified, className }) => (
    <div
        className={
            'd-flex align-items-center overflow-hidden ' +
            (className ? className : '')
        }
    >
        <img
            src={avatar}
            className="rounded-circle mr-2 flex-shrink-0"
            alt=""
            width="50"
            height="50"
        />
        <div className="d-flex flex-column overflow-hidden">
            <div>
                <span className="font-weight-bold">{name}</span>{' '}
                {isVerified ? (
                    <img
                        className="align-baseline"
                        src={verifiedSvg}
                        alt=""
                        width="16"
                        height="16"
                    />
                ) : null}
            </div>
            <div
                className="text-secondary small"
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                @{username}
            </div>
        </div>
    </div>
);

export default AccountSummary;
