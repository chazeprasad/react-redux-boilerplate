import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { SidenavStatus } from '../sidenav/SidenavStatus';

import MoreVertIco from '@material-ui/icons/MoreVert'
import NotificationsIco from '@material-ui/icons/NotificationsOutlined'
import AppsIco from '@material-ui/icons/Apps'
import SearchIco from '@material-ui/icons/Search'
import LanguageIco from '@material-ui/icons/Language'
import ToVoIco from '@material-ui/icons/TouchAppOutlined'
// import ToVoIco from '@material-ui/icons/TouchApp'


const HeaderView = props => (
    <AppBar position="fixed" className={props.css.header}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={props.toggleSidenav}
                className="menu-button"
                style={props.sidenavStatus === SidenavStatus.MIN ? {display: 'block' , opacity: 1} : {display: 'block', opacity: 0}}
            >
                <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" color="inherit" noWrap>Title</Typography> */}

            <div className="hrx-header-right-controls">

                <IconButton color="inherit" title="Search" >
                    <SearchIco />
                </IconButton>

                <IconButton color="inherit" title="Language"  >
                    <LanguageIco />
                </IconButton>

                <IconButton color="inherit" title="Apps"  >
                    <AppsIco />
                </IconButton>

                <IconButton color="inherit" title="Notifications"   >
                    <NotificationsIco />
                </IconButton>

                <IconButton color="inherit" title="Enter Autonomous Mode"   >
                    <ToVoIco />
                </IconButton>

                <IconButton color="inherit" title="More"  >
                    <MoreVertIco />
                </IconButton>



            </div>
        </Toolbar>
    </AppBar>
)

export default HeaderView
