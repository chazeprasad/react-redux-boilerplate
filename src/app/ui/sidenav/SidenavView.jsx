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

import DashboardIco from '../../../media/img/icon_dashboard.svg'



const SidenavView = ({data, css, toggleSidenave, onMenuClick, collapisng, getMenuCssClass, getCssStyle}) => (
    <Drawer
        className={css.drawer}
        classes={{paper: css.paper }}
        open={data.status === SidenavStatus.min}
        onClose={toggleSidenave}
        variant="permanent"

    >
        <div className="hr-sidemenu-wrapper">
        { data.menu
            ?
            <ul className="hr-nav ">
                {data.menu.map( (menu, index) => (
                    <li className={ menu.active ? 'primary active' : 'primary' } key={'menu-item-wrapper-'+index}>
                       <a key={'menu-item-'+index} onClick={onMenuClick(menu)}>
                           <i key={'menu-icon-'+index}>{menu.ico}</i>
                           <DashboardIco fill="red" className="ico" width={48} height={48} />
                           <span key={'menu-title-'+index}>{menu.title}</span>
                       </a>
                       {(menu.children && menu.children.length)
                            ?
                            <ul className={getMenuCssClass(menu)} key={'sm-'} style={getCssStyle(menu)}>
                                {menu.children.map((sm, i) => (
                                    <li key={'sm-item-wrapper-'+i}>
                                        <a key={'sm-item-'+i}>
                                            <i key={'sm-icon-'+i}>{sm.ico}</i>
                                            <span key={'sm-title-'+i}>{sm.title}</span>
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                            :   ''
                       }
                   </li>
                ))}
            </ul>
            : ''
        }
        </div>
    </Drawer>
)


export default SidenavView
