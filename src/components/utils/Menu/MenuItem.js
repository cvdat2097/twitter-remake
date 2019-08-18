import React from 'react';

const MenuItem = props => {
    const { title, icon, description, onClick } = props;

    return (
        <button
            onClick={onClick}
            className="btn btn-light btn-block text-left shadow-none rounded-0 d-flex align-items-start m-0 px-3"
        >
            {icon ? (
                <img
                    className="flex-shrink-0 mr-2 mt-1"
                    src={icon}
                    alt=""
                    width="18"
                    height="18"
                />
            ) : null}

            <div className="d-inline-flex flex-column">
                <span>{title}</span>
                <small className="small text-muted">{description}</small>
            </div>
        </button>
    );
};

export default MenuItem;
