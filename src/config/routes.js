import React from 'react';

import appStyle from '../stylesheet/style.scss';

import { ReactComponent as HomeSVG } from '../assets/svg/home.svg';
import { ReactComponent as ActiveHomeSVG } from '../assets/svg/home-active.svg';
import { ReactComponent as ExploreSVG } from '../assets/svg/explore.svg';
import { ReactComponent as ActiveExploreSVG } from '../assets/svg/explore-active.svg';
import { ReactComponent as NotificationsSVG } from '../assets/svg/notifications.svg';
import { ReactComponent as ActiveNotificationsSVG } from '../assets/svg/notifications-active.svg';
import { ReactComponent as MessagesSVG } from '../assets/svg/messages.svg';
import { ReactComponent as ActiveMessagesSVG } from '../assets/svg/messages-active.svg';
import { ReactComponent as BookmarksSVG } from '../assets/svg/bookmarks.svg';
import { ReactComponent as ActiveBookmarksSVG } from '../assets/svg/bookmarks-active.svg';
import { ReactComponent as ListsSVG } from '../assets/svg/lists.svg';
import { ReactComponent as ActiveListsSVG } from '../assets/svg/lists-active.svg';
import { ReactComponent as MoreSVG } from '../assets/svg/more.svg';

import HomePage from '../pages/Home';

const navLinkClassName = 'd-none d-lg-block mx-3 font-weight-bold';

export default [
    {
        path: '/home',
        icon: <HomeSVG />,
        activeIcon: <ActiveHomeSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Home</span>,
        component: <HomePage />,
    },
    {
        icon: <ExploreSVG />,
        activeIcon: <ActiveExploreSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Explore</span>,
        path: '/explore',
    },
    {
        icon: <NotificationsSVG />,
        activeIcon: <ActiveNotificationsSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Notifications</span>,
        path: '/notification',
    },
    {
        icon: <MessagesSVG />,
        activeIcon: <ActiveMessagesSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Messages</span>,
        path: '/messages',
    },
    {
        icon: <BookmarksSVG />,
        activeIcon: <ActiveBookmarksSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>Bookmarks</span>,
        path: '/bookmark',
    },
    {
        icon: <ListsSVG />,
        activeIcon: <ActiveListsSVG />,
        activeColor: appStyle.twPrimary,
        title: <span className={navLinkClassName}>List</span>,
        path: '/list',
    },
    {
        icon: <MoreSVG />,
        title: <span className={navLinkClassName}>Profile</span>,
        path: '/profile',
    },
    {
        icon: <MoreSVG />,
        title: <span className={navLinkClassName}>More</span>,
    },
];
