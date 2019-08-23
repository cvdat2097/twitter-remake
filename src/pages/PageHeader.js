import React from 'react';

import { Button } from '../components/utils/Button';

const PageHeader = props => {
    const { title, description, btnOnClick, btnIcon, children } = props;

    return (
        <div className="h-100 d-flex align-items-center position-relative py-3 px-2">
            {typeof title === 'string' ? (
                <div className="d-flex flex-column">
                    <h1 className="h5 m-0 font-weight-bold flex-grow-1">
                        {title}
                    </h1>
                    <span className="small text-secondary">{description}</span>
                </div>
            ) : (
                <div className="flex-grow-1">{title}</div>
            )}

            {btnOnClick || btnIcon ? (
                <div className="ml-auto pl-2">
                    <Button onClick={btnOnClick} icon={btnIcon} />
                </div>
            ) : null}

            {children}
        </div>
    );
};

export default PageHeader;
