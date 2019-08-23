import React from 'react';

import './widget.scss';

const Widget = props => {
    const { children } = props;

    return <div className="tw-widget">{children}</div>;
};

export default Widget;
