import React from 'react';
import PropTypes from 'prop-types';

import './listgroup.scss';

const ListItem = props => {
    const { children } = props;

    return (
        <div className="list-group-item tw-list-group-item border-bottom clickable py-2 px-3">
            {children}
        </div>
    );
};

ListItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};

export default ListItem;
