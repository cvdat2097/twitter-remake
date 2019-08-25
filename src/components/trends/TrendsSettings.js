import React, { useState } from 'react';

import { trans } from '../../lib/transtor';
import { Modal } from '../utils/Modal';
import { Divider } from '../utils/Divider';

import { SettingGroup, SettingSelect } from '../utils/Setting';

const TrendsSettings = props => {
    const { visible, onClose } = props;

    const [personalTrends, setPersonalTrends] = useState(false);

    return (
        <Modal visible={visible} title={trans('trend.settings.title')} onClose={onClose}>
            <SettingSelect
                caption={trans('trend.settings.forYou')}
                description={trans('trend.settings.forYou.description')}
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
                    caption={trans('trend.settings.location')}
                    description="Worldwide"
                />
            </div>
        </Modal>
    );
};

export default TrendsSettings;
