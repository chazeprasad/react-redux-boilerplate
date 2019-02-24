import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';

import Header from '../header/Header'
import Content from '../content/Content'
import Sidenav from '../sidenav/Sidenav'

const HomeView = props => (
    <div className="hrx-home-container">
        <Sidenav />
        <div className="hrx-main-wrapper">
            <Header {...props} />
            <Content {...props} />
        </div>

        { props.sidenavBackdrop ? (
            <Backdrop className="leftSidemenuBackdrop"  open={true} /> 
        ) : (
            null
        )}
        
         
    </div>
)

export default HomeView
