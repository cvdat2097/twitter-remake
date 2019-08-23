import React from 'react';

import { useVisibility } from '../../components/hooks';

import SearchBar from '../../components/SearchBar';
import { Button } from '../../components/utils/Button';
import TrendsSettings from '../../components/trends/TrendsSettings';

import { ReactComponent as SettingsSVG } from '../../assets/svg/icons/settings.svg';

const ExploreHeader = props => {
    const [
        settingsVisibility,
        showSettingsModal,
        hideSettingsModal,
    ] = useVisibility(false);

    return (
        <div className="d-flex" style={{ fontSize: '0.9rem' }}>
            <div className="flex-grow-1">
                <SearchBar />
            </div>
            <div className="px-3">
                <Button
                    className="ml-auto"
                    icon={<SettingsSVG className="svg-fill-primary" />}
                    onClick={showSettingsModal}
                />

                <TrendsSettings
                    visible={settingsVisibility}
                    onClose={hideSettingsModal}
                />
            </div>
        </div>
    );
};

export default ExploreHeader;
