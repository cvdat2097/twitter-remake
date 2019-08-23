import React, { useEffect } from 'react';

import DOMHelper from '../../../helper/DOM';

import './modal.scss';

const Modal = props => {
    let { visible, onClose, onConfirm } = props;

    const onModalBackdropClick = () => {
        onClose && onClose();
    };

    const onModalDialogClick = event => {
        event.stopPropagation();
    };

    const onConfirmClick = () => {
        onConfirm && onConfirm();
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
            className={'tw-modal modal ' + (visible ? 'show' : '')}
            onClick={onModalBackdropClick}
        >
            <div className="modal-dialog" onClick={onModalDialogClick}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={onCloseClick}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onConfirmClick}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
