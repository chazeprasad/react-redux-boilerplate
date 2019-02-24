import React, { Component } from 'react'
import { withBreakpoints } from 'react-breakpoints'

import './home.scss'
import Article from '../article/Article'
import HomeView from './HomeView'
import './home.scss'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { breakpoints, currentBreakpoint } = this.props
        const sidenavBackdrop = breakpoints[currentBreakpoint] <= breakpoints.mobile 
        return (
            <HomeView className="home-container" {...this.props} sidenavBackdrop={sidenavBackdrop} />
        )
    }
}

export default withBreakpoints(Home)
