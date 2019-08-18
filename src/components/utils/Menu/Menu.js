import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
    const { children } = props;

    return <div className="card-body border-top p-0">{children}</div>;
};

Menu.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};

export default Menu;
