import React from 'react';
import PropTypes from 'prop-types';

import PopoverPosition from './PopoverPosition';

const getStyleFromPosition = position => {
    switch (position) {
        case PopoverPosition.TOP_RIGHT:
            return {
                top: 0,
                right: 0,
            };

        case PopoverPosition.TOP_LEFT:
            return {
                top: 0,
                left: 0,
            };

        case PopoverPosition.BOTTOM_RIGHT:
            return {
                bottom: 0,
                right: 0,
            };

        case PopoverPosition.BOTTOM_LEFT:
            return {
                bottom: 0,
                left: 0,
            };

        default:
            throw new Error('Invalid Position Type');
    }
};

const Popover = props => {
    const { children, visible, position, onClose } = props;

    const styleFromPosition = getStyleFromPosition(position);

    const handleBackdropClick = event => {
        event.stopPropagation();

        onClose && onClose();
    };

    const handlePopoverClick = event => {
        event.stopPropagation();
    };

    if (visible) {
        return (
            <>
                <div
                    onClick={handlePopoverClick}
                    className="d-inline-flex position-absolute shadow bg-white overflow-hidden"
                    style={{
                        ...styleFromPosition,
                        zIndex: 9999,
                        maxWidth: '75vw',
                    }}
                >
                    {children}
                </div>
                <div
                    onClick={handleBackdropClick}
                    className="popover-backdrop fixed-top fixed-bottom"
                />
            </>
        );
    }

    return null;
};

Popover.propTypes = {
    position: PropTypes.oneOf([
        PopoverPosition.BOTTOM_LEFT,
        PopoverPosition.BOTTOM_RIGHT,
        PopoverPosition.TOP_LEFT,
        PopoverPosition.TOP_RIGHT,
    ]),
    onClose: PropTypes.func,
    children: PropTypes.any,
    visible: PropTypes.bool,
};

Popover.defaultProps = {
    position: PopoverPosition.BOTTOM_LEFT,
    visible: false,
};

export default Popover;
