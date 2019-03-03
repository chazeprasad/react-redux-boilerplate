import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { SidenavStatus } from './SidenavStatus';
import classNames from 'classnames';

import DashboardIco from '../../../media/img/icon_dashboard.svg'
import ArrowRightIco from '../../../media/img/arrow-right.svg'


const SidenavView = ({menuList, isPrimaryOpen, sidenav, css, toggleSidenave, onMenuClick, collapisng, getMenuCssClass, getCssStyle, onSubmenuClick, selectedMenu, onSubmenuMouseOut}) => (
    <Drawer
        className={css.drawer}
        classes={{paper: css.paper }}
        open={sidenav.status === SidenavStatus.min}
        onClose={toggleSidenave}
        variant="permanent"

    >
        {/* <SimpleBar style={{ height: '90vh', 'overflow-x': 'visible' }}> */}
            <div className="hrx-sidemenu-wrapper">
        { menuList
            ?
            <ul className={ sidenav.status === SidenavStatus.MIN ? 'hrx-nav hrx-nav-mini' : 'hrx-nav' }>
                {menuList.map( (menu, index) => (
                    <li className={ selectedMenu && menu.id === selectedMenu.id && isPrimaryOpen  ? 'primary active' : 'primary' } key={'menu-item-wrapper-'+index}>
                       <a key={'menu-item-'+index} onClick={onMenuClick(menu)}>
                           {/* <i key={'menu-icon-'+index}>{menu.ico}</i> */}
                           <DashboardIco fill="#ffffff" className="ico" width={sidenav.status === SidenavStatus.MIN ? 42 : 20} height={sidenav.status === SidenavStatus.MIN ? 42 : 20}  />
                           <span key={'menu-title-'+index}>{menu.title}</span>
                           { menu.children.length > 0
                                ?
                               <ArrowRightIco fill="#ffffff" className={ selectedMenu && (menu.id === selectedMenu.id) ? 'arrow open' : 'arrow'} width={20} height={20} />
                                : ''
                           }



                       </a>

                       {(menu.children && menu.children.length)
                            ?
                            <ul className={getMenuCssClass(menu)} key={'sm-'} style={getCssStyle(menu)} onMouseOut={onSubmenuMouseOut}>

                                {menu.children.map((sm, i) => (
                                    <li key={'sm-item-wrapper-'+i}>
                                        <a key={'sm-item-'+i} onClick={onSubmenuClick(menu,sm)}>
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
        {/* </SimpleBar> */}

    </Drawer>
)


export default SidenavView
