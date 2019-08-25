import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import DOMHelper from '../../../helper/DOM';
import ModalType from './ModalType';
import ModalSize from './ModalSize';

import closeSVG from '../../../assets/svg/icons/close-solid.svg';

import './modal.scss';

const getWidthFromSize = modalSize => {
    switch (modalSize) {
        case ModalSize.SMALL:
            return 200;

        case ModalSize.BIG:
            return 700;

        default:
        case ModalSize.MEDIUM:
            return 600;
    }
};

const Modal = props => {
    const {
        visible,
        title,
        header,
        closeIcon,
        footer,
        children,
        onClose,
        size,
        // onConfirm,
        // type,
    } = props;

    const onModalBackdropClick = () => {
        onClose && onClose();
    };

    const onModalDialogClick = event => {
        event.stopPropagation();
    };

    const onCloseClick = () => {
        onClose && onClose();
    };

    useEffect(() => {
        if (visible) {
            DOMHelper.addClass(document.body, 'modal-openning');
        }

        return () => {
            DOMHelper.removeClass(document.body, 'modal-openning');
        };
    }, [visible]);

    return (
        <div
            className={
                'tw-modal modal align-items-center ' + (visible ? 'show' : '')
            }
            onClick={onModalBackdropClick}
        >
            <div
                className="modal-dialog my-5"
                onClick={onModalDialogClick}
                style={{
                    width: getWidthFromSize(size),
                }}
            >
                <div className="modal-content">
                    <div className="modal-header py-0">
                        {header || (
                            <div className="d-flex justify-content-start align-items-center py-2">
                                <Button
                                    icon={closeIcon || closeSVG}
                                    onClick={onCloseClick}
                                />
                                <span className="h5 modal-title font-weight-bold pl-3 vertical-align-middle">
                                    {title}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={'modal-body ' + (children ? 'p-0' : '')}>
                        {children}
                    </div>

                    {footer && <div className="modal-footer">{footer}</div>}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    visible: PropTypes.bool,
    size: PropTypes.oneOf([ModalSize.SMALL, ModalSize.MEDIUM, ModalSize.BIG]),
    header: PropTypes.element,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    closeIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
    footer: PropTypes.element,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    type: PropTypes.oneOf([ModalType.ALERT, ModalType.MODAL]),
};

Modal.defaultProps = {
    size: ModalSize.MEDIUM,
    type: ModalType.MODAL,
};

export default Modal;
