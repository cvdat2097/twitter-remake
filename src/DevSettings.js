import React, { useState } from 'react';

import { Modal } from './components/utils/Modal';
import { ReactComponent as SettingsSVG } from './assets/svg/icons/settings.svg';

const DevSettings = props => {
    const { onChangeLanguage } = props;
    const [modalVisibility, setModalVisibility] = useState(false);

    const showModal = () => {
        setModalVisibility(true);
    };

    const hideModal = () => {
        setModalVisibility(false);
    };

    return (
        <div
            className="position-fixed d-flex justify-content-center"
            style={{
                bottom: 10,
                left: 16,
                zIndex: 99999,
            }}
        >
            <button
                className="btn btn-success btn-sm d-inline-flex align-items-center"
                onClick={showModal}
            >
                <SettingsSVG
                    className="svg-fill-light"
                    width="20"
                    height="20"
                />
                <span className="ml-1 small d-none d-lg-inline text-light font-weight-bold">
                    LAYOUT
                </span>
            </button>

            <Modal
                title="Layout Settings"
                visible={modalVisibility}
                onClose={hideModal}
            >
                <div className="p-3">
                    <p className="mb-2 font-weight-bold">Language</p>
                    <select
                        className="form-control"
                        onChange={event => onChangeLanguage(event.target.value)}
                    >
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                    </select>
                </div>
                {/* <div className="p-3">
                    <p className="mb-2 font-weight-bold">Theme</p>
                    <select className="form-control" onChange={() => {}}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div> */}
            </Modal>
        </div>
    );
};

export default DevSettings;
