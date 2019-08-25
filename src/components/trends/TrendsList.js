import React from 'react';
import PropTypes from 'prop-types';

import { trans } from '../../lib/transtor';
import { ListGroup, ListItem } from '../utils/ListGroup';
import { Button } from '../utils/Button';
import TrendsSettings from './TrendsSettings';
import { useVisibility } from '../hooks';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';

const Trend = props => {
    const { location, topic, tweets } = props;

    return (
        <ListItem>
            <div className="xsmall text-muted">
                {trans('trend.widget.trending', location)}
            </div>
            <div className="h6 font-weight-bold mb-1">{topic}</div>
            <div className="small text-muted">
                {trans('trend.widget.tweetUnit', tweets)}
            </div>
        </ListItem>
    );
};

const Header = props => {
    const { showSettingsModal } = props;

    return (
        <div className="d-flex align-items-center">
            <span>{trans('trend.widget.title')}</span>

            {showSettingsModal && (
                <Button
                    className="ml-auto"
                    icon={<SettingsSVG className="svg-fill-primary" />}
                    onClick={showSettingsModal}
                />
            )}
        </div>
    );
};

const Footer = () => {
    return (
        <div className="text-primary clickable small">
            {' '}
            {trans('trend.widget.more')}
        </div>
    );
};

const generateTrends = trends => {
    if (trends) {
        return trends.map(({ location, topic, tweets }, index) => (
            <Trend
                key={index}
                location={location}
                topic={topic}
                tweets={tweets}
            />
        ));
    }
};

const TrendsList = props => {
    const { trends, displaySettings } = props;

    const [
        settingsVisibility,
        showSettingsModal,
        hideSettingsModal,
    ] = useVisibility(false);

    return (
        <>
            <ListGroup
                header={
                    <Header
                        showSettingsModal={
                            displaySettings ? showSettingsModal : null
                        }
                    />
                }
                footer={<Footer />}
            >
                {generateTrends(trends)}
            </ListGroup>

            <TrendsSettings
                visible={settingsVisibility}
                onClose={hideSettingsModal}
            />
        </>
    );
};

TrendsList.propTypes = {
    trends: PropTypes.arrayOf(
        PropTypes.shape({
            location: PropTypes.string,
            topic: PropTypes.string,
            tweets: PropTypes.string,
        })
    ),
    displaySettings: PropTypes.bool,
};

export default TrendsList;
