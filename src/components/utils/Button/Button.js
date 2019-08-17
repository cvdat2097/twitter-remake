import React from 'react';

import ButtonType from './ButtonType';

import './button.scss';

const Button = props => {
    const {
        outlined,
        disabled,
        icon,
        activeIcon,
        active,
        activeColor,
        title,
        link,
        className,
        onClick,
        type,
        children,
    } = props;
    let svgIcon = null;

    if (typeof icon !== 'string') {
        svgIcon = active ? activeIcon || icon : icon;
    }

    const buttonType = type ? type : ButtonType.PRIMARY;

    return (
        <button
            onClick={onClick}
            className={
                (outlined
                    ? ` btn-outline-${buttonType}`
                    : ` btn-transparent-${buttonType}`) +
                (disabled ? ' disabled' : '') +
                ' tw-btn btn rounded-pill d-inline-flex align-items-center shadow-none ' +
                className
            }
        >
            <span className="btn-icon d-flex justify-content-center align-items-center">
                {svgIcon || (
                    <img
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

            {children}
        </button>
    );
};

export default Button;
