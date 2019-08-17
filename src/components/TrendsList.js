import React from 'react';

import ListGroup, { ListItem } from '../components/utils/ListGroup';
import Button from '../components/utils/Button';

import { TRENDS } from '../mock/trends';

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

class TrendsList extends React.Component {
    generateTrends(trends) {
        if (trends) {
            return trends.map((tr, index) => <Trend key={index} {...tr} />);
        }
    }

    render() {
        return (
            <ListGroup header={<TrendHeader />} footer={<TrendFooter />}>
                {this.generateTrends(TRENDS)}
            </ListGroup>
        );
    }
}

export default TrendsList;
