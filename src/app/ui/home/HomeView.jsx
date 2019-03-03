import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';

import Header from '../header/Header'
import Content from '../content/Content'
import Sidenav from '../sidenav/Sidenav'

import Hidden from '@material-ui/core/Hidden';
import { SidenavStatus } from '../sidenav/SidenavStatus';

const HomeView = ({sidenavStatus, onBackdropClick}) => (
    <div className="hrx-home-container">
        <Sidenav />

        <div className="hrx-main-wrapper">
            <Header  />
            <Content />
        </div>

        {/* <Hidden only={[ 'sm', 'md']}>
            <Backdrop
                // className={sidenavStatus !== SidenavStatus.MAX ? 'sidenav-backdrop-hide': ''}
                open={sidenavStatus === SidenavStatus.MAX}
                onClick={onBackdropClick} />
        </Hidden> */}

    </div>
)

export default HomeView
