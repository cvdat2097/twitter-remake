import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { trans } from '../lib/transtor';
import { Popover, PopoverPosition } from '../components/utils/Popover';
import { Menu, MenuItem } from '../components/utils/Menu';

import { ReactComponent as DownSVG } from '../assets/svg/icons/down.svg';

const AppFooter = () => {
    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleMenuClick = () => {
        setMenuVisibility(true);
    };

    const handleMenuPopoverClick = () => {
        setMenuVisibility(false);
    };
    return (
        <footer className="px-4 py-3">
            <Link className="xsmall text-muted mr-3" to="#">
                {trans('footer.terms')}
            </Link>
            <Link className="xsmall text-muted mr-3" to="#">
                {trans('footer.policy')}
            </Link>
            <Link className="xsmall text-muted mr-3" to="#">
                {trans('footer.cookies')}
            </Link>
            <Link className="xsmall text-muted mr-3" to="#">
                {trans('footer.adsInfo')}
            </Link>
            <span
                className="xsmall text-muted mr-3 btn-link position-relative text-nowrap"
                href="#"
                onClick={handleMenuClick}
            >
                <span>{trans('footer.more')}&nbsp;</span>

                <DownSVG className="align-middle" width="10" height="10" />

                <Popover
                    visible={menuVisibility}
                    onClose={handleMenuPopoverClick}
                    position={PopoverPosition.BOTTOM_RIGHT}
                >
                    <Menu>
                        <MenuItem
                            title={
                                <span className="big">
                                    {trans('footer.more.about')}
                                </span>
                            }
                        />
                        <MenuItem
                            title={
                                <span className="big">
                                    {trans('footer.more.status')}
                                </span>
                            }
                        />
                        <MenuItem
                            title={
                                <span className="big">
                                    {trans('footer.more.businesses')}
                                </span>
                            }
                        />
                        <MenuItem
                            title={
                                <span className="big">
                                    {trans('footer.more.developer')}
                                </span>
                            }
                        />
                    </Menu>
                </Popover>
            </span>
            <span className="xsmall text-muted">{trans('footer.copy')}</span>
        </footer>
    );
};

export default AppFooter;
