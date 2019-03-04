import React, { Component } from 'react'
import SidenavView from './SidenavView'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'


import { SidenavAction } from './SidenavAction'

import './sidenav.scss'
import { SidenavStatus } from './SidenavStatus';
import { jss } from './SidenavTheme'


class Sidenav extends Component {
    state = {
        collapsing: false,
        selectedMenu: null,
        selectedSubmenu: true,
        activeMenu: null,
        previousMenu: null,
        showSubmenu: true,
        // isPrimaryOpen: true,
        menu: []
    }

    duraion = 1.5
    menuHeight = 64
    submenuHeight = 42
    constructor(props) {
        super(props)
        this.dispatch = this.props.dispatch

    }
    componentDidMount(){
        this.setState({
            menu: this.props.sidenav.menu.map(x => {
                return {...x};
            })
        })

    }
    toggleSidenave = () => {
        this.activeMenu = null;
        this.setState({collapsing: true});
        this.timer = setTimeout(() => {
            this.setState({collapsing: false});
        }, this.duraion * 1000);

        const action = SidenavAction.Create(SidenavAction.TOGGLE)
        this.dispatch(action)
    }
    onMenuClick = (menu) => (evt) => {
        evt.preventDefault();

        const action = SidenavAction.Create(SidenavAction.ACTIVATE_MENU);
        this.dispatch(action);

        const currentMenu = {...this.state.activeMenu};

       

        if(this.state.activeMenu && menu.id === this.state.activeMenu.id) {
            this.setState({
                previousMenu: currentMenu,
                activeMenu: null,
                // showSubmenu: !this.state.showSubmenu
            })

        } else {
            this.setState({
                previousMenu: currentMenu,
                activeMenu: {...menu},
                // showSubmenu: !this.state.showSubmenu,
            })

            if(menu.children && menu.children.length === 0) {
                this.setState({
                    selectedMenu: {...menu},
                    selectedSubmenu: null
                })

                
            }

            
        }

        this.setState({collapsing: true});
        this.timer = setTimeout(() => {
            this.setState({collapsing: false});
        }, this.duraion * 1000);


    }

    onSubmenuClick = (menu, submenu) => (evt) => {
        evt.preventDefault();

        this.setState({
            selectedMenu: {...menu},
            selectedSubmenu: {...submenu}
        })

        if(this.props.sidenav.status === SidenavStatus.MIN){
            this.setState({
                activeMenu: null,
            })
        }
        
    }

    onSubmenuMouseOut(event){
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode === this || e === this) {
            console.log("--- IN ---")

           return;
        }
        console.log("--- OUT ---")

        // const sidenav = this.props.sidenav

        // if(sidenav.status === SidenavStatus.MIN){
        //     this.setState({
        //         showSubmenu: false
        //     })
        // }
    }

    getMenuCssClass = (menu) => {
        let css = ['primary']

        const sidenav  = this.props.sidenav

        css.push(this.state.activeMenu && this.state.activeMenu.id === menu.id && sidenav.isMenuActive ? ' active' : '' )
        css.push(this.state.selectedMenu && this.state.selectedMenu.id === menu.id ? ' selected' : '' )
        
        return css.join(' ')
    }

    getSubmenuWrapperCssClass = (menu) => {
        let css = ['hrx-nav nav-second-level']
        if(this.state.activeMenu && this.state.previousMenu) {
            css.push((this.state.collapsing && (menu.id === this.state.activeMenu.id || menu.id === this.state.previousMenu.id ) ) ? ' collapsing' : ' collapse')
        } else {
            css.push(' collapse ')
        }

        css.push( this.state.activeMenu && (menu.id === this.state.activeMenu.id) && !this.state.collapsing ? ' in' : '')
        css.push( this.state.selectedSubmenu && (menu.id === this.state.selectedSubmenu.id) && !this.state.collapsing ? ' selected' : '')
        
        return css.join(' ')
    }

    
    getSubmenuWrapperCssStyle = (menu) => {
        const data = this.props.sidenav
        let height =  this.state.activeMenu && (menu.id === this.state.activeMenu.id) ? (menu.children.length * this.submenuHeight) + 0 : 0
        if(data.status === SidenavStatus.MIN){
            height = height;
        }
        const opacity =  this.state.activeMenu && (menu.id === this.state.activeMenu.id) ? 1 : 0
        const display =  this.props.sidenav.isMenuActive ? 'block' : 'none'
        const style = { height: height, opacity: opacity , display: display}

       return (style)
    }

    getSubmenuCssClass = (menu, submenu) => {
        let css = ['']
        css.push(this.state.selectedSubmenu && this.state.selectedSubmenu.id === submenu.id ? 'selected' : '' )
        
        return css.join(' ')
    }

    

    

    render() {

        const data = this.props.sidenav
        const classList = ['hrx-sidenav-paper'];
        if( data.status === SidenavStatus.MAX) { classList.push('sidenav-max') }
        if( data.status === SidenavStatus.MIN) { classList.push('sidenav-min') }
        let paper = classList.join(' ');
        const css = {
            drawer: 'hrx-sidenav-drawer',
            paper: paper
        }

        return <SidenavView  
            {...this.props} 
            css={css}
            onSubmenuMouseOut={this.onSubmenuMouseOut}
            toggleSidenave={this.toggleSidenave}
            onMenuClick={this.onMenuClick}
            collapisng={this.state.collapsing}
            getMenuCssClass={this.getMenuCssClass}
            getSubmenuWrapperCssClass={this.getSubmenuWrapperCssClass}
            getSubmenuWrapperCssStyle={this.getSubmenuWrapperCssStyle}
            getSubmenuCssClass={this.getSubmenuCssClass}
            onSubmenuClick={this.onSubmenuClick}
            menuList={this.state.menu}
            selectedMenu={this.state.selectedMenu}
            activeMenu={this.state.activeMenu}  
        />
    }
}

const stateToProps = state => {
    return {
        sidenav: state.sidenav

    }
}

export default compose(
    withStyles(jss, { useTheme: true }),
    connect(
        stateToProps,
        null
    )
)(Sidenav)
