import { useState } from 'react';

const useToggleVisibility = defaultVisibility => {
    const [visibility, setVisibility] = useState(defaultVisibility);

    const show = () => {
        setVisibility(true);
    };

    const hide = () => {
        setVisibility(false);
    };

    return [visibility, show, hide];
};

export default useToggleVisibility;
