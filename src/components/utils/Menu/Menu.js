import React from 'react';

const Menu = props => {
    const { children } = props;

    return <div className="card-body border-top p-0">{children}</div>;
};

export default Menu;
