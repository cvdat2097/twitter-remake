import React from 'react';

import { Button } from '../components/utils/Button';

const PageHeader = props => {
    const { title, btnOnClick, btnIcon } = props;

    return (
        <div className="h-100 d-flex align-items-center py-3 px-2">
            <h1 className="h5 m-0 font-weight-bold">{title}</h1>

            <div className="position-relative ml-auto">
                <Button onClick={btnOnClick} icon={btnIcon} />
            </div>
        </div>
    );
};

export default PageHeader;
