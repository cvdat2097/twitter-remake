import React from 'react';

import NavButton from './NavButton';

import appStyle from '../../stylesheet/style.scss';
import './NavBar.scss';

const navLinkClassName = 'd-none d-lg-block mx-3 font-weight-bold';
const navLinks = [
    {
        icon: '/assets/home.svg',
        activeIcon: '/assets/home-active.svg',
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Home</span>,
        active: true,
    },
    {
        icon: '/assets/explore.svg',
        activeIcon: '/assets/explore-active.svg',
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Explore</span>,
    },
    {
        icon: '/assets/notifications.svg',
        activeIcon: '/assets/notifications-active.svg',
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Notifications</span>,
    },
    {
        icon: '/assets/messages.svg',
        activeIcon: '/assets/messages-active.svg',
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Messages</span>,
    },
    {
        icon: '/assets/bookmarks.svg',
        activeIcon: '/assets/bookmarks-active.svg',
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Bookmarks</span>,
    },
    {
        icon: '/assets/lists.svg',
        activeIcon: '/assets/lists-active.svg',
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>List</span>,
    },
    {
        icon: '/assets/more.svg',
        title: <span className={navLinkClassName}>Profile</span>,
    },
    {
        icon: '/assets/more.svg',
        title: <span className={navLinkClassName}>More</span>,
    },
];

class NavBar extends React.Component {
    generateNavButtons(buttons) {
        return buttons.map((btn, index) => {
            return (
                <div className="mb-2">
                    <NavButton key={index} {...btn} />
                </div>
            );
        });
    }

    render() {
        return (
            <section id="nav-bar">
                <div className="tw-header d-lg-block d-flex flex-column align-items-center">
                    <NavButton icon="/assets/logo.svg" />
                </div>
                <div className="d-lg-block d-flex flex-column align-items-center">
                    {this.generateNavButtons(navLinks)}
                </div>
            </section>
        );
    }
}

export default NavBar;
