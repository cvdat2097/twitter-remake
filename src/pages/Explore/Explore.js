import React from 'react';

import { useVisibility } from '../../components/hooks';
import { Divider } from '../../components/utils/Divider';
import { Widget } from '../../components/utils/Widget';
import TrendsList from '../../components/trends/TrendsList';
import AppFooter from '../AppFooter';
import SearchBar from '../../components/SearchBar';
import TrendsSettings from '../../components/trends/TrendsSettings';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';
import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';

import { TRENDS } from '../../mock/trends';

const Explore = () => {
    const [
        settingsVisibility,
        showSettingsModal,
        hideSettingsModal,
    ] = useVisibility(false);

    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        {/* <ExploreHeader /> */}
                        <PageHeader
                            title={
                                <div style={{ fontSize: '0.9rem' }}>
                                    <SearchBar />{' '}
                                </div>
                            }
                            btnIcon={
                                <SettingsSVG className="svg-fill-primary" />
                            }
                            btnOnClick={showSettingsModal}
                        >
                            <TrendsSettings
                                visible={settingsVisibility}
                                onClose={hideSettingsModal}
                            />
                        </PageHeader>
                    </div>

                    <div className="d-flex flex-column">
                        <TrendsList trends={TRENDS} />
                    </div>

                    <Divider />
                </section>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <section id="suggestion">
                    <div className="p-2">
                        <Widget>
                            <FollowSuggestion title="Who to follow" />
                        </Widget>
                    </div>
                </section>

                <AppFooter />
            </div>
        </div>
    );
};

export default Explore;
