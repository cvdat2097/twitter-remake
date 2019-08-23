import React from 'react';

const SettingSelect = props => {
    const { caption, description, value, onChange } = props;

    const handleInputChange = event => {
        onChange && onChange(event.target.checked);
    };

    return (
        <div className="d-flex px-3 py-2 custom-control custom-checkbox">
            <div className="d-flex flex-column">
                <label htmlFor="customCheck1">{caption}</label>
                <span className="small text-secondary">{description}</span>
            </div>
            <div className="ml-auto">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    onChange={handleInputChange}
                    checked={value}
                />
                <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                />
            </div>
        </div>
    );
};

export default SettingSelect;
