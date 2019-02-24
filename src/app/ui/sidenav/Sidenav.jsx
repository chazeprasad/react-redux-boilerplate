import React, { Component } from 'react'
import SidenavView from './SidenavView'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { SidenavAction } from './SidenavAction'

import './sidenav.scss'
import { SidenavStatus } from './SidenavStatus';

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.dispatch = this.props.dispatch
    }
    toggleSidenave = () => {
        const action = SidenavAction.Create(SidenavAction.TOGGLE)
        this.dispatch(action)
    }
    render() {
        const data = this.props.data
        const classList = ['drawer'];
        if( data.status === SidenavStatus.MAX) { classList.push('drawer-open') }
        if( data.status === SidenavStatus.MIN) { classList.push('drawer-min') }
        let drawerClass = classList.join(' ');
        const css = { drawerClass: drawerClass }
        return <SidenavView  {...this.props} toggleSidenave={this.toggleSidenave}  css={css} />
    }
}

const stateToProps = state => {
    return {
        data: state.sidenav
    }
}

export default compose(
    connect(
        stateToProps,
        null
    )
)(Sidenav)
