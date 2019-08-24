import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Widget } from '../../components/utils/Widget';
import { Empty } from '../../components/utils/Empty';
import { Tabs, TabBody } from '../../components/utils/Tabs';
import TrendsList from '../../components/trends/TrendsList';
import SearchBar from '../../components/SearchBar';
import AppFooter from '../AppFooter';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';
import { ReactComponent as CalendarSVG } from '../../assets/svg/icons/calendar.svg';
import backSvg from '../../assets/svg/icons/back.svg';

import { TRENDS } from '../../mock/trends';

const UserInfo = props => {
    const { name, username, joinedTime, nFollowers, nFollowing } = props;

    return (
        <div>
            <img
                className="w-100"
                src="/img/wallpaper.jpg"
                alt=""
                height="200"
                style={{ objectFit: 'cover' }}
            />
            <div className="position-relative d-flex p-3">
                <img
                    className="rounded-circle border-4 border-light position-absolute"
                    style={{
                        bottom: 0,
                        left: 'auto',
                    }}
                    width="120"
                    height="120"
                    src="/img/account-0.jpg"
                    alt=""
                />

                <button className="btn btn-outline-primary btn-sm rounded-pill ml-auto font-weight-bold">
                    Edit Profile
                </button>
            </div>
            <div className="p-3">
                <div className="font-weight-bold">{name}</div>
                <div className="text-secondary medium">@{username}</div>
                <div>
                    <CalendarSVG style={{ width: 16, height: 16 }} />
                    <span className="ml-1 text-secondary small">
                        {joinedTime}
                    </span>
                </div>
                <div>
                    <Link className="text-dark small" to="./following">
                        <span className="font-weight-bold">{nFollowing}</span>
                        <span className="ml-1 text-secondary">Following</span>
                    </Link>
                    <Link className="ml-3 text-dark small" to="./following">
                        <span className="font-weight-bold">{nFollowers}</span>
                        <span className="ml-1 text-secondary">Followers</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Profile = props => {
    const {
        currentAccount: { name, nTweets },
        history,
    } = props;

    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <PageHeader
                            title={name}
                            description={`${nTweets} Tweets`}
                            rightIcon={
                                <SettingsSVG className="svg-fill-primary" />
                            }
                            leftIcon={backSvg}
                            leftOnClick={() => history.goBack()}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <UserInfo
                            name="Admin"
                            username="Admin"
                            nFollowers="35,648"
                            nFollowing="35"
                            joinedTime="Joined October 2019"
                        />

                        <Tabs>
                            <TabBody title="Tweets">
                                <Empty
                                    title="Under Construction"
                                    description="Please comeback later"
                                />
                            </TabBody>
                            <TabBody title="Tweets &amp; Replies">
                                <Empty
                                    title="Under Construction"
                                    description="Please comeback later"
                                />
                            </TabBody>
                            <TabBody title="Meida">
                                <Empty
                                    title="Under Construction"
                                    description="Please comeback later"
                                />
                            </TabBody>
                            <TabBody title="Likes">
                                <Empty
                                    title="Under Construction"
                                    description="Please comeback later"
                                />
                            </TabBody>
                        </Tabs>
                    </div>
                </section>
            </div>

            <div className="col-md-4 d-none d-md-block">
                <div className="tw-header p-2 bg-white position-sticky fixed-top">
                    <SearchBar />
                </div>
                <div className="p-2">
                    <Widget>
                        <FollowSuggestion title="You might like" />
                    </Widget>
                </div>
                <div className="p-2">
                    <Widget>
                        <TrendsList trends={TRENDS} displaySettings />
                    </Widget>
                </div>

                <AppFooter />
            </div>
        </div>
    );
};

const mapStateToProps = ({ account: { current } }) => ({
    currentAccount: current,
});

export default connect(mapStateToProps)(Profile);
