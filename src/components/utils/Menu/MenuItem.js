import React from 'react';
import PropTypes from 'prop-types';

import './menu.scss';

const MenuItem = props => {
    const { title, icon, description, onClick, className } = props;

    return (
        <span
            onClick={onClick}
            className={
                'clickable tw-menu-item text-left medium shadow-none rounded-0 d-flex align-items-start m-0 py-2 px-3 ' +
                className
            }
        >
            {icon ? (
                <img
                    className="flex-shrink-0 mr-2 mt-1"
                    src={icon}
                    alt=""
                    width="18"
                    height="18"
                />
            ) : null}

            <div className="d-inline-flex flex-column">
                <span>{title}</span>
                <small className="small text-muted">{description}</small>
            </div>
        </span>
    );
};

MenuItem.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default MenuItem;
