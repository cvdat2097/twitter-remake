import React from 'react';

import { useVisibility } from '../../components/hooks';
import { Widget } from '../../components/utils/Widget';
import Tweet from '../../components/tweet/Tweet';
import TrendsList from '../../components/trends/TrendsList';
import { Tabs, TabBody } from '../../components/utils/Tabs';
import AppFooter from '../AppFooter';
import SearchBar from '../../components/SearchBar';
import SearchFilter from './SearchFilter';
import TrendsSettings from '../../components/trends/TrendsSettings';
import PageHeader from '../PageHeader';
import FollowSuggestion from '../../components/FollowSuggestion';

import { TWEETS } from '../../mock/tweet';
import { TRENDS } from '../../mock/trends';

import { MEDIA_TYPE } from '../../constants/tweet';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';
import backSVG from '../../assets/svg/icons/back.svg';

const Search = props => {
    const [
        settingsVisibility,
        showSettingsModal,
        hideSettingsModal,
    ] = useVisibility(false);

    const { history } = props;

    return (
        <div className="row no-gutters">
            <div className="col col-sm border-left border-right">
                <section id="main">
                    <div className="tw-header bg-white border-bottom position-sticky fixed-top p-2">
                        <PageHeader
                            title={
                                <div style={{ fontSize: '0.9rem' }}>
                                    <SearchBar />{' '}
                                </div>
                            }
                            leftIcon={backSVG}
                            leftOnClick={history.goBack}
                            rightIcon={
                                <SettingsSVG className="svg-fill-primary" />
                            }
                            rightOnClick={showSettingsModal}
                        >
                            <TrendsSettings
                                visible={settingsVisibility}
                                onClose={hideSettingsModal}
                            />
                        </PageHeader>
                    </div>

                    <div className="d-flex flex-column">
                        <Tabs>
                            <TabBody title="Top">
                                {TWEETS.map(({ user, post }, index) => (
                                    <Tweet
                                        key={index}
                                        user={user}
                                        post={post}
                                    />
                                ))}
                            </TabBody>
                            <TabBody title="Latest">
                                {TWEETS.map(({ user, post }, index) => (
                                    <Tweet
                                        key={index}
                                        user={user}
                                        post={post}
                                    />
                                ))}
                            </TabBody>
                            <TabBody title="People">
                                {TWEETS.map(({ user, post }, index) => (
                                    <Tweet
                                        key={index}
                                        user={user}
                                        post={post}
                                    />
                                ))}
                            </TabBody>
                            <TabBody title="Photos">
                                {TWEETS.filter(
                                    ({ post: { mediaType } }) =>
                                        mediaType === MEDIA_TYPE.IMAGE
                                ).map(({ user, post }, index) => (
                                    <Tweet
                                        key={index}
                                        user={user}
                                        post={post}
                                    />
                                ))}
                            </TabBody>
                            <TabBody title="Videos">
                                {TWEETS.filter(
                                    ({ post: { mediaType } }) =>
                                        mediaType === MEDIA_TYPE.IMAGE
                                ).map(({ user, post }, index) => (
                                    <Tweet
                                        key={index}
                                        user={user}
                                        post={post}
                                    />
                                ))}
                            </TabBody>
                        </Tabs>
                    </div>
                </section>
            </div>
            <div className="col-md-4 d-none d-md-block">
                <div className="p-2">
                    <Widget className="bg-white">
                        <SearchFilter />
                    </Widget>
                </div>

                <div className="p-2">
                    <Widget>
                        <TrendsList trends={TRENDS} displaySettings />
                    </Widget>
                </div>

                <div className="p-2">
                    <Widget>
                        <FollowSuggestion title="Who to follow" />
                    </Widget>
                </div>

                <AppFooter />
            </div>
        </div>
    );
};

export default Search;
