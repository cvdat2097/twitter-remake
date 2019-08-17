/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Popover, PopoverPosition } from '../../components/utils/Popover';
import { Menu, MenuItem } from '../../components/utils/Menu';

import { ReactComponent as DownSVG } from '../../assets/svg/icons/down.svg';

const INITIAL_STATE = {
    menuVisible: false,
};

class HomeFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        this.showFooterMenu = this.showFooterMenu.bind(this);
        this.hideFooterMenu = this.hideFooterMenu.bind(this);
    }

    showFooterMenu() {
        this.setState({
            menuVisible: true,
        });
    }

    hideFooterMenu() {
        this.setState({
            menuVisible: false,
        });
    }

    render() {
        const { menuVisible } = this.state;

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
                    onClick={this.showFooterMenu}
                >
                    <span>More&nbsp;</span>

                    <DownSVG className="align-middle" width="10" height="10" />

                    <Popover
                        visible={menuVisible}
                        onClose={this.hideFooterMenu}
                        position={PopoverPosition.BOTTOM_RIGHT}
                    >
                        <Menu>
                            <MenuItem
                                title={<span className="small">About</span>}
                            />
                            <MenuItem
                                title={<span className="small">Status</span>}
                            />
                            <MenuItem
                                title={
                                    <span className="small">Businesses</span>
                                }
                            />
                            <MenuItem
                                title={<span className="small">Developer</span>}
                            />
                        </Menu>
                    </Popover>
                </span>
                <span className="xsmall text-muted">
                    &copy;&nbsp;Twitter, Inc - Remaked by D
                </span>
            </footer>
        );
    }
}

export default HomeFooter;
