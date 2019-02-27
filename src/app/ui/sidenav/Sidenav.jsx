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
        previousMemu: null
    }

    duraion = 0.45
    menuHeight = 64
    submenuHeight = 42
    constructor(props) {
        super(props)
        this.dispatch = this.props.dispatch

    }
    toggleSidenave = () => {
        const action = SidenavAction.Create(SidenavAction.TOGGLE)
        this.dispatch(action)
    }
    onMenuClick = (menu) => (evt) => {
        console.log(menu)
        evt.preventDefault();
        let menuList = this.props.data.menu;
        for (let x of menuList) {
            x.active = false
            if(x.id === menu.id){
                x.active = true
                this.setState({
                    previousMemu: this.state.selectedMenu,
                    selectedMenu: x,
                })
            }
        }

        const action = SidenavAction.Create(SidenavAction.ON_SELECT_MENU, menuList)
        this.dispatch(action)
        this.setState({collapsing: true});
        this.timer = setTimeout(() => {
            this.setState({collapsing: false});
        }, this.duraion * 1000);


    }

    getMenuCssClass = (menu) => {
        let css = ['hr-nav nav-second-level']
        if(this.state.selectedMenu && this.state.previousMemu) {
            css.push((this.state.collapsing && (menu.id === this.state.selectedMenu.id || menu.id === this.state.previousMemu.id ) ) ? 'collapsing' : 'collapse')
        } else {
            css.push('collapse')
        }

        css.push(menu.active && !this.state.collapsing ? 'in ' : '')
        return css.join(' ')
    }
    getCssStyle = (menu) => {
        const height = menu.active ? (menu.children.length * this.submenuHeight) + 0 : 0
        const opacity = menu.active ? 1 : 0
        const style = { height: height, opacity: opacity }
        console.log('style')
        console.log(style)
       return (style)
    }

    render() {

        console.log(this.props)
        const data = this.props.data
        const classList = ['hrx-sidenav-paper'];
        if( data.status === SidenavStatus.MAX) { classList.push('sidenav-max') }
        if( data.status === SidenavStatus.MIN) { classList.push('sidenav-min') }
        let paper = classList.join(' ');
        const css = {
            drawer: 'hrx-sidenav-drawer',
            paper: paper
        }



        return <SidenavView  {...this.props} toggleSidenave={this.toggleSidenave} onMenuClick={this.onMenuClick}  css={css} collapisng={this.state.collapsing} getMenuCssClass={this.getMenuCssClass} getCssStyle={this.getCssStyle}  />
    }
}

const stateToProps = state => {
    return {
        data: state.sidenav

    }
}

export default compose(
    withStyles(jss, { useTheme: true }),
    connect(
        stateToProps,
        null
    )
)(Sidenav)
