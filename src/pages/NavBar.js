import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from '../config/routes';
import { Button } from '../components/utils/Button';
import { Menu, MenuItem, MenuDivider } from '../components/utils/Menu';
import { Popover, PopoverPosition } from '../components/utils/Popover';
import URLHelper from '../helper/url';
import { trans } from '../lib/transtor';

import tweetSVG from '../assets/svg/tweet.svg';
import addSVG from '../assets/svg/icons/add.svg';
import momentSVG from '../assets/svg/icons/moment.svg';
import adsSVG from '../assets/svg/icons/ads.svg';
import analyticSVG from '../assets/svg/icons/analytic.svg';
import settingsSVG from '../assets/svg/icons/settings.svg';
import helpSVG from '../assets/svg/icons/help.svg';
import { ReactComponent as MoreSVG } from '../assets/svg/more.svg';
import { ReactComponent as LogoSVG } from '../assets/svg/logo.svg';

const MoreMenu = ({ visible, onClose, currentAccount }) => {
    const { username, name } = currentAccount;

    return (
        <Popover
            visible={visible}
            onClose={onClose}
            position={PopoverPosition.BOTTOM_LEFT}
        >
            <div className="card">
                <Menu
                    style={{
                        minWidth: 230,
                    }}
                >
                    <div className="px-3 py-2">
                        <div className="d-flex align-items-center justify-content-between">
                            <img
                                className="rounded-circle"
                                src="/img/account-0.jpg"
                                alt=""
                                widht="40"
                                height="40"
                            />
                            <Button outlined className="small" icon={addSVG} />
                        </div>
                        <div>
                            <span className="font-weight-bold mt-2 mb-0 d-block">
                                {name}
                            </span>
                            <span className="medium text-secondary m-0">
                                @{username}
                            </span>
                        </div>
                    </div>
                    <MenuDivider />
                    <MenuItem
                        className="text-nowrap"
                        title="Moments"
                        icon={momentSVG}
                    />
                    <MenuItem
                        className="text-nowrap"
                        title="Twitter Ads"
                        icon={adsSVG}
                    />
                    <MenuItem
                        className="text-nowrap"
                        title="Analytics"
                        icon={analyticSVG}
                    />
                    <MenuDivider />
                    <MenuItem
                        className="text-nowrap"
                        title="Settings and Privacy"
                        icon={settingsSVG}
                    />
                    <MenuItem
                        className="text-nowrap"
                        title="Help Centre"
                        icon={helpSVG}
                    />
                    <MenuItem
                        className="text-nowrap"
                        title="Display"
                        icon={analyticSVG}
                    />
                </Menu>
            </div>
        </Popover>
    );
};

// TODO: Custom Avatar somewhere else
const generateNavButtons = (
    buttons,
    activePath,
    custom = { pathToCustomize: null }
) => {
    const { pathToCustomize, customIcon, customActiveIcon } = custom;

    return buttons.map(
        (
            { icon, activeIcon, activeColor, title, path, redirect, hideInNav },
            index
        ) => {
            const Icon = icon;
            const ActiveIcon = activeIcon;

            if (path && !redirect && !hideInNav) {
                return (
                    <div key={index} className="mb-2 nav-item">
                        <Button
                            className="large position-relative"
                            icon={
                                pathToCustomize === path
                                    ? customIcon
                                    : Icon && <Icon />
                            }
                            activeIcon={
                                pathToCustomize === path
                                    ? customActiveIcon
                                    : ActiveIcon && <ActiveIcon />
                            }
                            activeColor={activeColor}
                            title={title}
                            active={activePath === path}
                            href={path}
                        />
                    </div>
                );
            }

            return null;
        }
    );
};

// TODO: Remove this
const navLinkClassName = 'd-none d-lg-block mx-3 font-weight-bold';

const NavBar = props => {
    const {
        location: { pathname },
        currentAccount,
    } = props;
    const { avatar } = currentAccount;
    const [moreMenuVisibility, setMoreMenuVisibility] = useState(false);
    const currentRootPath = URLHelper.getRootPath(pathname);

    const handleMoreMenuClick = () => {
        setMoreMenuVisibility(true);
    };

    const handleMoreMenuClose = () => {
        setMoreMenuVisibility(false);
    };

    return (
        <section id="nav-bar" className="position-sticky fixed-top py-1">
            <div className="tw-header d-lg-block d-flex flex-column align-items-center">
                <Button className="large" icon={<LogoSVG />} href="/" />
            </div>

            <div className="d-lg-block d-flex flex-column align-items-center nav">
                {generateNavButtons(Routes, currentRootPath, {
                    pathToCustomize: '/profile',
                    customIcon: (
                        <img
                            className="rounded-circle border-2 border-transparent"
                            src={avatar}
                            alt=""
                        />
                    ),
                    customActiveIcon: (
                        <img
                            className="rounded-circle border-2 border-primary"
                            src={avatar}
                            alt=""
                        />
                    ),
                })}

                <div className="mb-2 nav-item position-relative">
                    <Button
                        className="large position-relative"
                        icon={<MoreSVG />}
                        title={
                            <span className={navLinkClassName}>
                                {trans('navbar.more')}
                            </span>
                        }
                        onClick={handleMoreMenuClick}
                    />
                    <MoreMenu
                        visible={moreMenuVisibility}
                        onClose={handleMoreMenuClose}
                        currentAccount={currentAccount}
                    />
                </div>
            </div>

            <div className="d-lg-block d-flex justify-content-center mt-4">
                <button
                    className="btn btn-primary rounded-pill d-inline-flex justify-content-center"
                    style={{ padding: 10 }}
                >
                    <span className={navLinkClassName}>Tweet</span>
                    <img
                        className="d-lg-none"
                        src={tweetSVG}
                        alt="tweet-button"
                        width="24"
                        height="24"
                    />
                </button>
            </div>
        </section>
    );
};

const mapStateToProps = ({ account: { current } }) => ({
    currentAccount: current,
});

export default withRouter(connect(mapStateToProps)(NavBar));
