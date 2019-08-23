import React from 'react';

const Empty = props => {
    const { title, description, actionTitle, onAction } = props;

    return (
        <div className="d-flex flex-column align-items-center">
            <p className="text-center h5 font-weight-bold my-3">{title}</p>
            <p className="text-center text-secondary medium">{description}</p>
            {actionTitle ? (
                <button
                    className="btn btn-primary rounded-pill font-weight-bold medium"
                    onClick={onAction}
                >
                    {actionTitle}
                </button>
            ) : null}
        </div>
    );
};

export default Empty;
