import React from 'react';

import { ListGroup, ListItem } from '../components/utils/ListGroup';
import { AccountSummary } from '../components/utils/AccountSummary';

import { PEOPLE_TO_FOLLOW } from '../mock/follow';

const Footer = () => {
    return <div className="text-primary clickable small">Show more</div>;
};

const generatePeople = people => {
    if (people) {
        return people.map(({ name, username, avatar, isVerified }, index) => (
            <ListItem key={index}>
                <div className="d-flex justify-content-between align-items-center">
                    <AccountSummary
                        name={name}
                        username={username}
                        avatar={avatar}
                        isVerified={isVerified}
                    />
                    <div>
                        <button className="btn btn-outline-primary btn-sm rounded-pill font-weight-bold py-1 px-2">
                            Follow
                        </button>
                    </div>
                </div>
            </ListItem>
        ));
    }

    return null;
};

const FollowSuggestion = () => {
    return (
        <ListGroup header="Who to follow" footer={<Footer />}>
            {generatePeople(PEOPLE_TO_FOLLOW)}
        </ListGroup>
    );
};

export default FollowSuggestion;
