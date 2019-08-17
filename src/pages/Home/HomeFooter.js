/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { ReactComponent as DownSVG } from '../../assets/svg/icons/down.svg';

const HomeFooter = () => (
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
        <a className="xsmall text-muted mr-3" href="#">
            More&nbsp;
            <DownSVG className="align-middle" width="10" height="10" />
        </a>
        <span className="xsmall text-muted">
            &copy; Twitter, Inc - Remaked by D
        </span>
    </footer>
);

export default HomeFooter;
