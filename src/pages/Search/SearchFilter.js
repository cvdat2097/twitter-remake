import React from 'react';

import { ListGroup } from '../../components/utils/ListGroup';

const Header = () => {
    return (
        <div className="d-flex align-items-center">
            <span>Search filters</span>
        </div>
    );
};

const Footer = () => {
    return <div className="text-primary clickable small">Advanced search</div>;
};

const SearchFilter = () => {
    return (
        <ListGroup header={<Header />} footer={<Footer />}>
            <div className="px-3 py-2 medium">
                <span className="h6">People</span>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation1"
                        name="people-radio"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customControlValidation1"
                    >
                        From anyone
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation2"
                        name="people-radio"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customControlValidation2"
                    >
                        From anyone
                    </label>
                </div>
            </div>

            <div className="px-3 py-2 medium">
                <span className="h6">Location</span>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation3"
                        name="location-radio"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customControlValidation3"
                    >
                        Anywhere
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation4"
                        name="location-radio"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customControlValidation4"
                    >
                        Near you
                    </label>
                </div>
            </div>
        </ListGroup>
    );
};

export default SearchFilter;
