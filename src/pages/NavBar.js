import React from 'react';
import { withRouter } from 'react-router-dom';

import Routes from '../config/routes';
import { Button } from '../components/utils/Button';
import URLHelper from '../helper/url';

import tweetSVG from '../assets/svg/tweet.svg';
import { ReactComponent as LogoSVG } from '../assets/svg/logo.svg';

const generateButtons = (buttons, activePath) => {
    return buttons.map(
        ({ icon, activeIcon, activeColor, title, path, redirect }, index) => {
            const Icon = icon;
            const ActiveIcon = activeIcon;

            if (path && !redirect) {
                return (
                    <div key={index} className="mb-2 nav-item">
                        <Button
                            className="large position-relative"
                            icon={Icon && <Icon />}
                            activeIcon={ActiveIcon && <ActiveIcon />}
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
    } = props;

    const currentRootPath = URLHelper.getRootPath(pathname);

    return (
        <section id="nav-bar" className="position-sticky fixed-top py-1">
            <div className="tw-header d-lg-block d-flex flex-column align-items-center">
                <Button className="large" icon={<LogoSVG />} href="/" />
            </div>

            <div className="d-lg-block d-flex flex-column align-items-center nav">
                {generateButtons(Routes, currentRootPath)}
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
export default withRouter(NavBar);
