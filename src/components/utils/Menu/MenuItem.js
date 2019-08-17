import React from 'react';

const MenuItem = ({ title, icon, description, onClick }) => (
    <button
        onClick={onClick}
        className="btn btn-light btn-block text-left rounded-0 border-0 d-flex align-items-start m-0 px-3"
    >
        <img
            className="flex-shrink-0 mr-2 mt-1"
            src={icon}
            alt=""
            width="18"
            height="18"
        />

        <div className="d-inline-flex flex-column">
            <span>{title}</span>
            <small className="small text-muted">{description}</small>
        </div>
    </button>
);

export default MenuItem;
