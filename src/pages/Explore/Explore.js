import React from 'react';

import TrendsWidget from '../../components/trends/TrendsWidget';
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
                        <TrendsWidget trends={TRENDS} />
                    </div>
                </section>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <section id="suggestion">
                    <div className="p-2">
                        <FollowSuggestion />
                    </div>
                </section>

                <AppFooter />
            </div>
        </div>
    );
};

export default Explore;
