import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
    const { children, className, style } = props;

    return (
        <div
            className={'card-body p-0 ' + (className ? className : '')}
            style={style}
        >
            {children}
        </div>
    );
};

Menu.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};

export default Menu;
