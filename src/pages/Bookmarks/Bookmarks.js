import React from 'react';
import { connect } from 'react-redux';

import { Widget } from '../../components/utils/Widget';
import { Empty } from '../../components/utils/Empty';
import TrendsList from '../../components/trends/TrendsList';
import SearchBar from '../../components/SearchBar';
import AppFooter from '../AppFooter';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import { TRENDS } from '../../mock/trends';

const Bookmarks = props => {
    const {
        currentAccount: { username },
    } = props;
    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <PageHeader
                            title="Bookmarks"
                            description={`@${username}`}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <Empty
                            title="You haven’t added any Tweets to your Bookmarks yet"
                            description="When you do, they’ll show up here."
                        />
                    </div>
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

const mapStateToProps = ({ account: { current } }) => ({
    currentAccount: current,
});

export default connect(mapStateToProps)(Bookmarks);
