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



const HeaderView = ({
    css,
    toggleSidenav,
    sidenavStatus,
    langMenu,
    onLangButtonClick

}) => (
    <AppBar position="fixed" className={css.header}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={toggleSidenav}
                className="menu-button"

            >
                <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" color="inherit" noWrap>Title</Typography> */}

            <div className="hrx-header-right-controls">

                <IconButton
                    color="inherit"
                    title="Search"
                    className="hrx-nav-button "
                >
                    <SearchIco />
                </IconButton>

                <IconButton
                    color="inherit"
                    title="Language"
                    aria-owns={langMenu ? 'lang-menu' : undefined}
                    aria-haspopup="true"
                    onClick={onLangButtonClick}
                    className="hrx-nav-button"
                >
                    <LanguageIco />
                </IconButton>



                <IconButton
                    color="inherit"
                    title="Apps"
                    className="hrx-nav-button tablet-hide"
                >
                    <AppsIco />
                </IconButton>

                <IconButton
                    color="inherit"
                    title="Notifications"
                    className="hrx-nav-button tablet-hide"
                >
                    <NotificationsIco />
                </IconButton>

                <IconButton
                    color="inherit"
                    title="Enter Autonomous Mode"
                    className="hrx-nav-button tablet-hide"
                >
                    <ToVoIco />
                </IconButton>

                <IconButton
                    color="inherit"
                    title="More"
                    className="hrx-nav-button"
                >
                    <MoreVertIco />
                </IconButton>



            </div>

        </Toolbar>



    </AppBar>
)

export default HeaderView
