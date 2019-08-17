import React from 'react';

import './button.scss';

const Button = props => {
    const {
        icon,
        activeIcon,
        active,
        activeColor,
        title,
        link,
        className,
        onClick,
    } = props;
    let svgIcon = null;

    if (typeof icon !== 'string') {
        svgIcon = active ? activeIcon || icon : icon;
    }

    return (
        <button
            onClick={onClick}
            className={
                'tw-btn btn btn-transparent-primary rounded-pill d-flex align-items-center shadow-none ' +
                className
            }
        >
            <span className="btn-icon d-flex justify-content-center align-items-center">
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

export default Button;
