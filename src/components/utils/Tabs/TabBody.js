import React from 'react';

const TabBody = props => {
    const { children } = props;

    return <div className="tw-tab-content p-3">{children}</div>;
};

export default TabBody;
