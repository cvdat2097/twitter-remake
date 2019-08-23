import React from 'react';

const Empty = props => {
    const { title, description } = props;

    return (
        <>
            <p className="text-center h5 font-weight-bold my-3">{title}</p>
            <p className="text-center text-secondary medium">{description}</p>
        </>
    );
};

export default Empty;
