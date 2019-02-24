import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const HeaderView = props => (
    <AppBar position="fixed" className={props.css.header}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={props.toggleSidenav}
                className="menu-button"
            >
                <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" color="inherit" noWrap>Title</Typography> */}
        </Toolbar>
    </AppBar>
)

export default HeaderView
