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

import Logo from '../../../media/img/highradius-logo-18.svg'
// import LogoMin from '../../../media/img/Logo-Min.svg'
import LogoMin from '../../../media/img/logo.svg'
// import LogoMin from '../../../media/img/logo-min-dark.svg'
import LogoText from '../../../media/img/logo-text.svg'
import LeftArrow from '../../../media/img/icon_arrow_left.svg'
import DashboardIco from '../../../media/img/icon_dashboard.svg'
import ArrowRightIco from '../../../media/img/arrow-right.svg'
import ArrowLeftIco from '../../../media/img/arrow-left.svg'


const SidenavView = ({
    p,
    menuList,
    sidenav,
    css,
    toggleSidenave,
    onMenuClick,
    getMenuCssClass,
    getSubmenuWrapperCssClass,
    getSubmenuWrapperCssStyle,
    getSubmenuCssClass,
    onSubmenuClick,
    selectedMenu,
    activeMenu,
    onSubmenuMouseOut}) => (
    <Drawer
        className={css.drawer}
        classes={{paper: css.paper }}
        open={sidenav.status === SidenavStatus.min}
        onClose={toggleSidenave}
        variant="permanent"

    >
        <div className='hrx-logo-wrapper'>
            <LogoMin className="hrx-logo"    />
            <LogoText className="hrx-logo-text"  width="150" height="64" style={sidenav.status === SidenavStatus.MAX ? {opacity: 1} : {opacity: 0}}   />
        </div>
        {/* <SimpleBar style={{ height: '90vh', 'overflow-x': 'visible' }}> */}
            <div className="hrx-sidemenu-wrapper">
        { menuList
            ?
            <ul className={ sidenav.status === SidenavStatus.MIN ? 'hrx-nav hrx-nav-mini' : 'hrx-nav' }>
                {menuList.map( (menu, index) => (
                    <li className={ getMenuCssClass(menu) } key={'menu-item-wrapper-'+index}>
                       <a key={'menu-item-'+index} onClick={onMenuClick(menu)}>
                           {/* <i key={'menu-icon-'+index}>{menu.ico}</i> */}
                           <DashboardIco fill="#ffffff" className="ico" width={sidenav.status === SidenavStatus.MIN ? 42 : 20} height={sidenav.status === SidenavStatus.MIN ? 42 : 20}  />
                           <span key={'menu-title-'+index}>{p.t(menu.title) + ' - ' + menu.level }</span>
                           { menu.children.length > 0
                                ?
                               <ArrowRightIco fill="#ffffff" className={ activeMenu && (menu.id === activeMenu.id) ? 'arrow open' : 'arrow'} width={20} height={20} />
                                : ''
                           }



                       </a>

                       {(menu.children && menu.children.length)
                            ?
                            <ul className={getSubmenuWrapperCssClass(menu)} key={'sm-'} style={getSubmenuWrapperCssStyle(menu)} onMouseOut={onSubmenuMouseOut}>

                                {menu.children.map((sm, i) => (
                                    <li className={getSubmenuCssClass(menu, sm)} key={'sm-item-wrapper-'+i}>
                                        <a key={'sm-item-'+i} onClick={onSubmenuClick(menu,sm)}>
                                            <span key={'sm-title-'+i}>{p.t(sm.title) + ' - ' + sm.level}</span>
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

        <div className='hrx-menu-controller-wrapper' style={sidenav.status === SidenavStatus.MAX ? {} : {width: 64}}>

        <div className="hrx-avatar">
            <div className={sidenav.status === SidenavStatus.MAX ? 'img-wrapper ' : 'img-wrapper avatar-min'}>
                <img  src={ require('../../../media/img/cruise.jpg') } />
           </div>
        </div>

        <span className="spacer" />

        <a className="hide-menu-button" onClick={toggleSidenave} style={sidenav.status === SidenavStatus.MAX ? {opacity: 1} : {opacity: 0}} >
            <span> Hide Menu</span>
            <div className="icon-wrapper">
                <ArrowLeftIco fill="#ddedf9" className="ico" width={42} height={42}  />

            </div>

        </a>


        </div>



    </Drawer>
)


export default SidenavView
