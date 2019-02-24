import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { SidenavStatus } from './SidenavStatus';
import classNames from 'classnames';


const SidenavView = props => (
    <Drawer
        className={props.css.drawerClass}
        classes={{
            paper: classNames('sidemenu', [props.css.drawerClass] ),
          }}
        open={props.data.status === SidenavStatus.MAX}
        onClose={props.toggleSidenave}
        variant="permanent"

    >
          <div>
            
          </div>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}

            <ListItem button key="Hello"> <Link to="/hello">Hello</Link></ListItem>
          </List>
          <Divider />

         
        </Drawer>
)

export default SidenavView
