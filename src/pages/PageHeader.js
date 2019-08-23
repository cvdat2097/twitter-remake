import React from 'react';

import { Button } from '../components/utils/Button';

const PageHeader = props => {
    const { title, btnOnClick, btnIcon, children } = props;

    return (
        <div className="h-100 d-flex align-items-center position-relative py-3 px-2">
            {typeof title === 'string' ? (
                <h1 className="h5 m-0 font-weight-bold flex-grow-1">{title}</h1>
            ) : (
                <div className="flex-grow-1">{title}</div>
            )}

            <div className="ml-auto pl-2">
                <Button onClick={btnOnClick} icon={btnIcon} />
            </div>

            {children}
        </div>
    );
};

export default PageHeader;
