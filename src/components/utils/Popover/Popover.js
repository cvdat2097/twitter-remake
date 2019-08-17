import React from 'react';

export const PopoverPosition = {
    TOP_RIGHT: Symbol('TOP RIGHT'),
    TOP_LEFT: Symbol('TOP LEFT'),
    BOTTOM_RIGHT: Symbol('BOTTOM RIGHT'),
    BOTTOM_LEFT: Symbol('BOTTOM LEFT'),
};

class Popover extends React.Component {
    constructor(props) {
        super(props);

        this.handleBackdropClick = this.handleBackdropClick.bind(this);
    }

    get styleFromPosition() {
        const { position } = this.props;

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
            default:
                return {
                    bottom: 0,
                    left: 0,
                };
        }
    }

    handleBackdropClick() {
        const { onClose } = this.props;

        onClose && onClose();
    }

    handlePopoverClick(event) {
        event.stopPropagation();
    }

    render() {
        const { children, visible } = this.props;

        if (visible) {
            return (
                <>
                    <div
                        onClick={this.handlePopoverClick}
                        className="d-inline-flex position-absolute shadow"
                        style={{
                            ...this.styleFromPosition,
                            zIndex: 9999,
                            maxWidth: '75vw',
                        }}
                    >
                        {children}
                    </div>
                    <div
                        onClick={this.handleBackdropClick}
                        className="popover-backdrop fixed-top fixed-bottom"
                    />
                </>
            );
        }

        return null;
    }
}

export default Popover;
