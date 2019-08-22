/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { Popover, PopoverPosition } from '../../components/utils/Popover';
import { Menu, MenuItem } from '../../components/utils/Menu';

import { ReactComponent as DownSVG } from '../../assets/svg/icons/down.svg';

const HomeFooter = () => {
    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleMenuClick = () => {
        setMenuVisibility(true);
    };

    const handleMenuPopoverClick = () => {
        setMenuVisibility(false);
    };
    return (
        <footer className="px-4 py-3">
            <a className="xsmall text-muted mr-3" href="#">
                Terms
            </a>
            <a className="xsmall text-muted mr-3" href="#">
                Privacy Policy
            </a>
            <a className="xsmall text-muted mr-3" href="#">
                Cookies
            </a>
            <a className="xsmall text-muted mr-3" href="#">
                Ads info
            </a>
            <span
                className="xsmall text-muted mr-3 btn-link position-relative text-nowrap"
                href="#"
                onClick={handleMenuClick}
            >
                <span>More&nbsp;</span>

                <DownSVG className="align-middle" width="10" height="10" />

                <Popover
                    visible={menuVisibility}
                    onClose={handleMenuPopoverClick}
                    position={PopoverPosition.BOTTOM_RIGHT}
                >
                    <Menu>
                        <MenuItem title={<span className="big">About</span>} />
                        <MenuItem title={<span className="big">Status</span>} />
                        <MenuItem
                            title={<span className="big">Businesses</span>}
                        />
                        <MenuItem
                            title={<span className="big">Developer</span>}
                        />
                    </Menu>
                </Popover>
            </span>
            <span className="xsmall text-muted">
                &copy;&nbsp;Twitter, Inc - Remaked by D
            </span>
        </footer>
    );
};

export default HomeFooter;
