import React from 'react';

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
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        title: <span className={navLinkClassName}>Home</span>,
        icon: HomeSVG,
        activeIcon: ActiveHomeSVG,
        component: HomePage,
        routes: [
            {
                path: '/home/hihi',
                component: () => <span>hihi</span>,
            },
        ],
    },
    {
        path: '/explore',
        title: <span className={navLinkClassName}>Explore</span>,
        icon: ExploreSVG,
        activeIcon: ActiveExploreSVG,
        render: () => <div>Explore Page</div>,
    },
    {
        path: '/notification',
        title: <span className={navLinkClassName}>Notifications</span>,
        icon: NotificationsSVG,
        activeIcon: ActiveNotificationsSVG,
        render: () => <div>Notification Page</div>,
    },
    {
        path: '/messages',
        title: <span className={navLinkClassName}>Messages</span>,
        icon: MessagesSVG,
        activeIcon: ActiveMessagesSVG,
        render: () => <div>Messages Page</div>,
    },
    {
        path: '/bookmark',
        title: <span className={navLinkClassName}>Bookmarks</span>,
        icon: BookmarksSVG,
        activeIcon: ActiveBookmarksSVG,
        render: () => <div>Bookmark Page</div>,
    },
    {
        icon: ListsSVG,
        title: <span className={navLinkClassName}>List</span>,
        activeIcon: ActiveListsSVG,
        path: '/list',
        render: () => <div>List Page</div>,
    },
    {
        path: '/profile',
        title: <span className={navLinkClassName}>Profile</span>,
        icon: MoreSVG,
        render: () => <div>Profile Page</div>,
    },
    {
        path: '#',
        title: <span className={navLinkClassName}>More</span>,
        icon: MoreSVG,
    },
];
