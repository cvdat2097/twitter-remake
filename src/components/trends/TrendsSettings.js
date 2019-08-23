import React, { useState } from 'react';

import { Modal } from '../utils/Modal';
import { Divider } from '../utils/Divider';

import { SettingGroup, SettingSelect } from '../utils/Setting';

const TrendsSettings = props => {
    const { visible, onClose } = props;

    const [personalTrends, setPersonalTrends] = useState(false);

    return (
        <Modal visible={visible} title="Trends" onClose={onClose}>
            <SettingSelect
                caption="Trends for you"
                description="Personalise trends based on your location and who you follow."
                value={personalTrends}
                onChange={setPersonalTrends}
            />

            <div
                className={
                    'flex-column ' + (personalTrends ? 'd-none' : 'd-flex')
                }
            >
                <Divider />
                <SettingGroup
                    caption="Change location"
                    description="Worldwide"
                />
            </div>
        </Modal>
    );
};

export default TrendsSettings;
