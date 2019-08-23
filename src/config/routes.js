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
import ExplorePage from '../pages/Explore';
import NotificationPage from '../pages/Notification';
import ListsPage from '../pages/Lists';
import BookmarksPage from '../pages/Bookmarks';
import ProfilePage from '../pages/Profile';
import NotFound from '../pages/NotFound';

const navLinkClassName = 'd-none d-lg-block mx-3 font-weight-bold';

const ROUTE_CONFIG = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'HOME',
        path: '/home',
        title: <span className={navLinkClassName}>Home</span>,
        icon: HomeSVG,
        activeIcon: ActiveHomeSVG,
        component: HomePage,
        routes: [
            {
                path: '/home/sub1',
                component: () => <span>Home / Sub 1</span>,
            },
            {
                path: '/home/sub2',
                component: () => <span>Home / Sub 2</span>,
            },
        ],
    },
    {
        name: 'EXPLORE',
        path: '/explore',
        title: <span className={navLinkClassName}>Explore</span>,
        icon: ExploreSVG,
        activeIcon: ActiveExploreSVG,
        component: ExplorePage,
    },
    {
        name: 'NOTIFICATION',
        path: '/notification',
        title: <span className={navLinkClassName}>Notifications</span>,
        icon: NotificationsSVG,
        activeIcon: ActiveNotificationsSVG,
        component: NotificationPage,
    },
    {
        name: 'MESSAGES',
        path: '/messages',
        title: <span className={navLinkClassName}>Messages</span>,
        icon: MessagesSVG,
        activeIcon: ActiveMessagesSVG,
        component: () => <div>Messages Page</div>,
    },
    {
        name: 'BOOKMARK',
        path: '/bookmark',
        title: <span className={navLinkClassName}>Bookmarks</span>,
        icon: BookmarksSVG,
        activeIcon: ActiveBookmarksSVG,
        component: BookmarksPage,
    },
    {
        name: 'LIST',
        icon: ListsSVG,
        title: <span className={navLinkClassName}>List</span>,
        activeIcon: ActiveListsSVG,
        path: '/list',
        component: ListsPage,
    },
    {
        name: 'PROFILE',
        path: '/profile',
        title: <span className={navLinkClassName}>Profile</span>,
        icon: MoreSVG,
        component: ProfilePage,
    },
    {
        name: 'NOT_FOUND',
        component: NotFound,
    },
];

export const PATHNAME = {
    SEARCH: '/search',
};

export default ROUTE_CONFIG;
