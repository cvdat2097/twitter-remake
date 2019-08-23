import React from 'react';

import './tabs.scss';

const Tabs = () => {
    return (
        <div className="tw-tabs">
            <div className="tabs-nav d-flex text-secondary">
                <div className="tw-tab flex-grow-1 hoverable-primary clickable text-center py-2 active">
                    All
                </div>
                <div className="tw-tab flex-grow-1 hoverable-primary clickable text-center py-2">
                    Mentions
                </div>
            </div>

            <div className="tw-tab-content p-3">
                <p className="text-center h5 font-weight-bold my-3">
                    Nothing to see here... yet
                </p>
                <p className="text-center text-secondary medium">
                    From likes to Retweets and a whole lot more, this is where
                    all the action happens.
                </p>
            </div>
        </div>
    );
};

export default Tabs;
