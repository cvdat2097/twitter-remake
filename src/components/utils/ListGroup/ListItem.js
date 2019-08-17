import React from 'react';

import './listgroup.scss';

const ListItem = props => {
    const { children } = props;

    return (
        <div className="list-group-item tw-list-group-item border-bottom clickable py-2 px-3">
            {children}
        </div>
    );
};
export default ListItem;
