import React from 'react';

import { Widget } from '../../components/utils/Widget';
import TrendsList from '../../components/trends/TrendsList';
import SearchBar from '../../components/SearchBar';
import AppFooter from '../AppFooter';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';

import { TRENDS } from '../../mock/trends';

const Notification = () => {
    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <PageHeader
                            title="Notifications"
                            btnIcon={
                                <SettingsSVG className="svg-fill-primary" />
                            }
                        />
                    </div>

                    <div className="d-flex flex-column">d</div>
                </section>
            </div>

            <div className="col-md-4 d-none d-md-block">
                <div className="tw-header p-2 bg-white position-sticky fixed-top">
                    <SearchBar />
                </div>
                <div className="p-2">
                    <Widget>
                        <TrendsList trends={TRENDS} displaySettings />
                    </Widget>
                </div>
                <div className="p-2">
                    <Widget>
                        <FollowSuggestion />
                    </Widget>
                </div>

                <AppFooter />
            </div>
        </div>
    );
};

export default Notification;
