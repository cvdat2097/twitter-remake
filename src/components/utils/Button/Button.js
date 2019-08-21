import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonType from './ButtonType';

import appStyle from '../../../stylesheet/style.scss';
import './button.scss';

const ButtonTag = props => {
    const { href, children, ...otherProps } = props;

    return href ? (
        <Link to={href} {...otherProps}>
            {children}
        </Link>
    ) : (
        <button {...otherProps}>{children}</button>
    );
};

const Button = props => {
    const {
        outlined,
        disabled,
        icon,
        activeIcon,
        active,
        activeColor,
        title,
        className,
        onClick,
        type,
        children,
        href,
    } = props;
    let svgIcon = null;

    if (typeof icon !== 'string') {
        svgIcon = active ? activeIcon || icon : icon;
    }

    const buttonType = type ? type : ButtonType.PRIMARY;

    return (
        <ButtonTag
            href={href}
            onClick={onClick}
            className={
                (outlined
                    ? ` btn-outline-${buttonType}`
                    : ` btn-transparent-${buttonType}`) +
                (disabled ? ' disabled' : '') +
                ' tw-btn btn rounded-pill clickable d-inline-flex align-items-center shadow-none ' +
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
                    style={
                        active
                            ? { color: activeColor || appStyle.twPrimary }
                            : null
                    }
                >
                    {title}
                </span>
            )}

            {children}
        </ButtonTag>
    );
};

Button.propTypes = {
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    activeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([
        ButtonType.DANGER,
        ButtonType.DARK,
        ButtonType.LIGHT,
        ButtonType.PRIMARY,
        ButtonType.SUCCESS,
        ButtonType.WARNING,
    ]),
    href: PropTypes.string,
    children: PropTypes.element,
};

export default Button;
