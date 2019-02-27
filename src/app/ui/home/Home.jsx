import React, { Component } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import './home.scss'
import HomeView from './HomeView'
import { SidenavAction } from '../sidenav/SidenavAction';


class Home extends Component {
    constructor(props) {
        super(props)
        this.dispatch = this.props.dispatch
    }

    onBackdropClick = () => {
        const action = SidenavAction.Create(SidenavAction.TOGGLE)
        this.dispatch(action)
    }

    render() {
        return (
            <HomeView className="home-container" {...this.props} onBackdropClick={this.onBackdropClick}  />
        )
    }
}

const stateToProps = state => {
    return {
        sidenavStatus: state.sidenav.status
    }
}
// <Hidden only={['sm', 'lg']}>

export default compose(
    connect(stateToProps, null),

)(Home)
