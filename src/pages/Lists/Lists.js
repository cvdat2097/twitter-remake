import React from 'react';
import { connect } from 'react-redux';

import { trans } from '../../lib/transtor';
import { Widget } from '../../components/utils/Widget';
import { Empty } from '../../components/utils/Empty';
import { Tabs, TabBody } from '../../components/utils/Tabs';
import TrendsList from '../../components/trends/TrendsList';
import SearchBar from '../../components/SearchBar';
import AppFooter from '../AppFooter';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import listAddSVG from '../../assets/svg/icons/list-add.svg';

import { TRENDS } from '../../mock/trends';

const Lists = props => {
    const {
        currentAccount: { username },
    } = props;
    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <PageHeader
                            title="Lists"
                            description={`@${username}`}
                            rightIcon={listAddSVG}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <Tabs>
                            <TabBody title="Owned">
                                <Empty
                                    title="You haven’t created any Lists yet."
                                    description="When you do, they’ll show up here."
                                    actionTitle="Create a List"
                                    onAction={() =>
                                        console.log('Created A List')
                                    }
                                />
                            </TabBody>
                            <TabBody title="Subscribed">
                                <Empty
                                    title="You haven’t subscribed to any Lists yet."
                                    description="When you do, they’ll show up here."
                                />
                            </TabBody>
                            <TabBody title="Member">
                                <Empty
                                    title="You haven’t been added to any Lists yet."
                                    description="When someone adds you to a List, it’ll show up here."
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
                        <TrendsList trends={TRENDS} displaySettings />
                    </Widget>
                </div>
                <div className="p-2">
                    <Widget>
                        <FollowSuggestion
                            title={trans('follow.widget.title')}
                        />
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

export default connect(mapStateToProps)(Lists);
