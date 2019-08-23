import React from 'react';
import rightSVG from '../../../assets/svg/icons/right.svg';

import './setting.scss';

const SettingGroup = props => {
    const { caption, description, onClick } = props;

    return (
        <div
            className="tw-setting-container d-flex align-items-center px-3 py-2 custom-control custom-checkbox"
            onClick={onClick}
        >
            <div className="d-flex flex-column">
                <span>{caption}</span>
                <span className="small text-secondary">{description}</span>
            </div>
            <div className="ml-auto pr-1">
                <img src={rightSVG} alt="" width="20" height="20" />
            </div>
        </div>
    );
};

export default SettingGroup;
