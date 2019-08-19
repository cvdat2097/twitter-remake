import React from 'react';

import { Button } from '../../components/utils/Button';

import tweetSVG from '../../assets/svg/tweet.svg';
import { ReactComponent as LogoSVG } from '../../assets/svg/logo.svg';
import { ReactComponent as HomeSVG } from '../../assets/svg/home.svg';
import { ReactComponent as ActiveHomeSVG } from '../../assets/svg/home-active.svg';
import { ReactComponent as ExploreSVG } from '../../assets/svg/explore.svg';
import { ReactComponent as ActiveExploreSVG } from '../../assets/svg/explore-active.svg';
import { ReactComponent as NotificationsSVG } from '../../assets/svg/notifications.svg';
import { ReactComponent as ActiveNotificationsSVG } from '../../assets/svg/notifications-active.svg';
import { ReactComponent as MessagesSVG } from '../../assets/svg/messages.svg';
import { ReactComponent as ActiveMessagesSVG } from '../../assets/svg/messages-active.svg';
import { ReactComponent as BookmarksSVG } from '../../assets/svg/bookmarks.svg';
import { ReactComponent as ActiveBookmarksSVG } from '../../assets/svg/bookmarks-active.svg';
import { ReactComponent as ListsSVG } from '../../assets/svg/lists.svg';
import { ReactComponent as ActiveListsSVG } from '../../assets/svg/lists-active.svg';
import { ReactComponent as MoreSVG } from '../../assets/svg/more.svg';
import appStyle from '../../stylesheet/style.scss';

const navLinkClassName = 'd-none d-lg-block mx-3 font-weight-bold';
const navButtons = [
    {
        icon: <HomeSVG />,
        activeIcon: <ActiveHomeSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Home</span>,
        active: true,
    },
    {
        icon: <ExploreSVG />,
        activeIcon: <ActiveExploreSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Explore</span>,
    },
    {
        icon: <NotificationsSVG />,
        activeIcon: <ActiveNotificationsSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Notifications</span>,
    },
    {
        icon: <MessagesSVG />,
        activeIcon: <ActiveMessagesSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Messages</span>,
    },
    {
        icon: <BookmarksSVG />,
        activeIcon: <ActiveBookmarksSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Bookmarks</span>,
    },
    {
        icon: <ListsSVG />,
        activeIcon: <ActiveListsSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>List</span>,
    },
    {
        icon: <MoreSVG />,
        title: <span className={navLinkClassName}>Profile</span>,
    },
    {
        icon: <MoreSVG />,
        title: <span className={navLinkClassName}>More</span>,
    },
];

const generateButtons = buttons => {
    return buttons.map(
        ({ icon, activeIcon, activeColor, title, active }, index) => {
            return (
                <div key={index} className="mb-2 nav-item">
                    <Button
                        className="large"
                        icon={icon}
                        activeIcon={activeIcon}
                        activeColor={activeColor}
                        title={title}
                        active={active}
                    />
                </div>
            );
        }
    );
};

const NavBar = () => (
    <section id="nav-bar" className="position-sticky fixed-top py-1">
        <div className="tw-header d-lg-block d-flex flex-column align-items-center">
            <Button className="large" icon={<LogoSVG />} />
        </div>

        <div className="d-lg-block d-flex flex-column align-items-center nav">
            {generateButtons(navButtons)}
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

export default NavBar;
