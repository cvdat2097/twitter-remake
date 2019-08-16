import React from 'react';
import './NavButton.scss';

const NavButton = props => {
    const { icon, activeIcon, active, activeColor, title, link } = props;
    let svgIcon = null;

    if (typeof icon !== 'string') {
        svgIcon = active ? activeIcon || icon : icon;
    }

    return (
        <button className="btn-nav btn btn-transparent-primary rounded-pill d-flex align-items-center shadow-none">
            <span className="btn-icon">
                {svgIcon || (
                    <img
                        style={{ color: 'red' }}
                        className=""
                        src={active ? activeIcon || icon : icon}
                        alt="icon"
                    />
                )}
            </span>

            {title && (
                <span
                    className="h5 m-0"
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

export default NavButton;
