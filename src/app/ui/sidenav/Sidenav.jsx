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
        previousMemu: null,
        showSubmenu: true,
        menu: []
    }

    duraion = 0.45
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
        const action = SidenavAction.Create(SidenavAction.TOGGLE)
        this.dispatch(action)
    }
    onMenuClick = (menu) => (evt) => {
        evt.preventDefault();
        this.setState({
            showSubmenu: true
        })

        const currentMenu = {...this.state.selectedMenu};

        if(this.state.selectedMenu && menu.id === this.state.selectedMenu.id) {
            this.setState({previousMemu: null})
            this.setState({selectedMenu: null})
        } else {
            this.setState({previousMemu: {currentMenu}})
            this.setState({selectedMenu: {...menu }})
        }


        this.setState({collapsing: true});
        this.timer = setTimeout(() => {
            this.setState({collapsing: false});
        }, this.duraion * 1000);


    }

    onSubmenuClick = (menu, submenu) => (evt) => {
        evt.preventDefault();
    }

    onSubmenuMouseOut(event){
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
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
        let css = ['hrx-nav nav-second-level']
        if(this.state.selectedMenu && this.state.previousMemu) {
            css.push((this.state.collapsing && (menu.id === this.state.selectedMenu.id || menu.id === this.state.previousMemu.id ) ) ? 'collapsing' : 'collapse')
        } else {
            css.push('collapse')
        }

        css.push( this.state.selectedMenu && (menu.id === this.state.selectedMenu.id) && !this.state.collapsing ? 'in ' : '')
        return css.join(' ')
    }
    getCssStyle = (menu) => {
        const data = this.props.sidenav
        let height =  this.state.selectedMenu && (menu.id === this.state.selectedMenu.id) ? (menu.children.length * this.submenuHeight) + 0 : 0
        if(data.status === SidenavStatus.MIN){
            height = height;
        }
        const opacity =  this.state.selectedMenu && (menu.id === this.state.selectedMenu.id) ? 1 : 0
        const display =  !this.state.showSubmenu ? 'none' : 'block'
        const style = { height: height, opacity: opacity , display: display}

       return (style)
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

        return <SidenavView onSubmenuMouseOut={this.onSubmenuMouseOut}  {...this.props} toggleSidenave={this.toggleSidenave} onMenuClick={this.onMenuClick}  css={css} collapisng={this.state.collapsing} getMenuCssClass={this.getMenuCssClass} getCssStyle={this.getCssStyle} onSubmenuClick={this.onSubmenuClick} menuList={this.state.menu} selectedMenu={this.state.selectedMenu}  />
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
