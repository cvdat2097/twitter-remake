import React from 'react';
import { Link } from 'react-router-dom';

import { PATHNAME } from '../../config/routes';

const NotFound = () => (
    <div className="row">
        <div className="col">
            <h4 className="text-center font-weight-bold m-5">
                Sorry, that page doesn't exist!
            </h4>
            <p className="text-center">
                Why not try a <Link to={PATHNAME.SEARCH}>search</Link> to find
                something else?
            </p>
        </div>
    </div>
);

export default NotFound;
