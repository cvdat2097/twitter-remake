import React from 'react';
import { connect } from 'react-redux';

import { Widget } from '../../components/utils/Widget';
import { Empty } from '../../components/utils/Empty';
import { Tabs, TabBody } from '../../components/utils/Tabs';
import TrendsList from '../../components/trends/TrendsList';
import SearchBar from '../../components/SearchBar';
import AppFooter from '../AppFooter';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';

import { TRENDS } from '../../mock/trends';

const Profile = props => {
    const {
        currentAccount: { name, nTweets },
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
                        />
                    </div>

                    <div className="d-flex flex-column">
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
