import React from 'react';

import { Button } from '../components/utils/Button';

const PageHeader = props => {
    const {
        title,
        description,
        leftOnClick,
        leftIcon,
        rightOnClick,
        rightIcon,
        children,
    } = props;

    return (
        <div className="h-100 d-flex align-items-center position-relative py-3 px-2">
            {leftOnClick || leftIcon ? (
                <div className="pr-2">
                    <Button onClick={leftOnClick} icon={leftIcon} />
                </div>
            ) : null}

            <div className="flex-grow-1">
                <h1 className="h5 m-0 font-weight-bold">{title}</h1>
                <span className="small text-secondary">{description}</span>
            </div>

            {rightOnClick || rightIcon ? (
                <div className="ml-auto pl-2">
                    <Button onClick={rightOnClick} icon={rightIcon} />
                </div>
            ) : null}

            {children}
        </div>
    );
};

export default PageHeader;
