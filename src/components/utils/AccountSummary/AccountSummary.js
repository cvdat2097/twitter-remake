import React from 'react';
import PropTypes from 'prop-types';

import verifiedSvg from '../../../assets/svg/icons/verified-account.svg';

const AccountSummary = props => {
    const { name, username, avatar, isVerified, className } = props;

    return (
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
};

AccountSummary.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    isVerified: PropTypes.bool,
    className: PropTypes.string,
};

export default AccountSummary;
