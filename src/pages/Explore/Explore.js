import React from 'react';

import { Divider } from '../../components/utils/Divider';
import { Widget } from '../../components/utils/Widget';
import TrendsList from '../../components/trends/TrendsList';
import AppFooter from '../AppFooter';
import ExploreHeader from './ExploreHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import { TRENDS } from '../../mock/trends';

const Explore = () => {
    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <ExploreHeader />
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
                            <FollowSuggestion />
                        </Widget>
                    </div>
                </section>

                <AppFooter />
            </div>
        </div>
    );
};

export default Explore;
