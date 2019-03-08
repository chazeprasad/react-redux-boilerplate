import React, { Component } from 'react'
import HeaderView from './HeaderView'
import { HeaderSelector } from './HeaderSelector'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { SidenavAction } from '../sidenav/SidenavAction'
import { SidenavStatus } from '../sidenav/SidenavStatus'

import './header.scss'
import { HeaderAction } from './HeaderAction';

class Header extends Component {
    state = {
        langMenu: null
    }

    constructor(props) {
        super(props)
        this.dispatch = this.props.dispatch
    }
    toggleSidenav = () => {
        const action = SidenavAction.Create(SidenavAction.TOGGLE)
        this.dispatch(action)
    }

    onLangButtonClick = event => {
        // this.setState({ langMenu: event.currentTarget });
        console.log(event.currentTarget)
        const action = HeaderAction.Create(HeaderAction.SHOW_LANG_SELECTION, {langMenu: event.currentTarget})
        this.dispatch(action);
    };



    render() {
        const classList = ['hrx-header']
        if (this.props.sidenavStatus === SidenavStatus.MAX) {
            classList.push('hrx-header-shift-max')
        }
        if (this.props.sidenavStatus === SidenavStatus.MIN) {
            classList.push('hrx-header-shift-min')
        }
        const css = { header: classList.join(' ') }

        console.log('css')
        console.log(css)

        return (
            <HeaderView
                {...this.props}
                toggleSidenav={this.toggleSidenav}
                css={css}
                onLangButtonClick = {this.onLangButtonClick}
                langMenu = {this.props.langMenu}

            />
        )
    }
}

const stateToProps = state => {
    return {
        sidenavStatus: HeaderSelector.GetSidenavStatus(state),
        langMenu:state.header.langMenu
    }
}

export default compose(
    connect(
        stateToProps,
        null
    )
)(Header)
