import React from 'react';

import './widget.scss';

const Widget = props => {
    const { children, className } = props;

    return (
        <div className={'tw-widget border ' + (className ? className : '')}>
            {children}
        </div>
    );
};

export default Widget;
