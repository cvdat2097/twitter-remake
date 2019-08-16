import React from 'react';

import './NavButton.scss';

export default props => {
    const { icon, activeIcon, active, activeColor, title, link } = props;

    return (
        <button className="btn-nav btn rounded-pill d-flex align-items-center shadow-none">
            <span className="btn-icon">
                <img
                    className=""
                    src={active ? activeIcon || icon : icon}
                    alt="icon"
                />
            </span>
            {title && (
                <span
                    className="h5"
                    style={active ? { color: activeColor } : null}
                >
                    {title}
                </span>
            )}
            {link && (
                <a href={link} className="stretched-link">
                    {' '}
                </a>
            )}
        </button>
    );
};
