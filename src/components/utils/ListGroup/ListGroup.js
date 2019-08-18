import React from 'react';

import './listgroup.scss';

const ListGroup = props => {
    const { children, header, footer } = props;

    return (
        <div className="list-group tw-list-group">
            <div className="list-header list-group-item tw-list-group-item border-bottom py-1 px-3 h5 font-weight-bold">
                {header}
            </div>
            {children}
            <div className="list-footer list-group-item tw-list-group-item py-2">
                {footer}
            </div>
        </div>
    );
};

export default ListGroup;
