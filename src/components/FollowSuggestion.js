import React from 'react';

import { ListGroup, ListItem } from '../components/utils/ListGroup';
import { AccountSummary } from '../components/utils/AccountSummary';

import { PEOPLE_TO_FOLLOW } from '../mock/follow';

const Footer = () => {
    return <div className="text-primary clickable small">Show more</div>;
};

class FollowSuggestion extends React.Component {
    generatePeople(people) {
        if (people) {
            return people.map((p, index) => (
                <ListItem key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <AccountSummary {...p} />
                        <div>
                            <button className="btn btn-outline-primary btn-sm rounded-pill font-weight-bold py-1 px-2">
                                Follow
                            </button>
                        </div>
                    </div>
                </ListItem>
            ));
        }
    }

    render() {
        return (
            <ListGroup header="Who to follow" footer={<Footer />}>
                {this.generatePeople(PEOPLE_TO_FOLLOW)}
            </ListGroup>
        );
    }
}

export default FollowSuggestion;
