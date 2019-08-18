import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListItem } from '../components/utils/ListGroup';
import { Button } from '../components/utils/Button';

import { ReactComponent as SettingsSVG } from '../assets/svg/icons/settings.svg';

const Trend = props => {
    const { location, topic, tweets } = props;

    return (
        <ListItem>
            <div className="xsmall text-muted">Trending in {location}</div>
            <div className="h6 font-weight-bold mb-1">{topic}</div>
            <div className="small text-muted">{tweets} Tweets</div>
        </ListItem>
    );
};

const TrendHeader = () => {
    return (
        <div className="d-flex align-items-center">
            <span>Trends for you</span>
            <Button
                className="ml-auto"
                icon={<SettingsSVG className="svg-fill-primary" />}
            />
        </div>
    );
};

const TrendFooter = () => {
    return <div className="text-primary clickable small">Show more</div>;
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
    const { trends } = props;
    return (
        <ListGroup header={<TrendHeader />} footer={<TrendFooter />}>
            {generateTrends(trends)}
        </ListGroup>
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
};

export default TrendsList;
