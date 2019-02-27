/* global __DEVTOOLS__ __USE_GA__ __GA_ID__ */
/* eslint global-require:0 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ReactBreakpoints from 'react-breakpoints'

import { Theme } from '../theme/Theme'
import { Store, history } from './store/Store'
import routes from './routing/route'
import './app.scss'

const breakpoints = {
    mobile: 600,
    tablet: 960,
    desktop: 1280,
}

class App extends Component {
    render() {
        let cmp

        if (__DEVTOOLS__) {
            const DevTools = require('./util/DevTools').default
            cmp = (
                <Provider store={Store}>
                    <ReactBreakpoints
                        breakpoints={breakpoints}
                        debounceResize={true}
                        debounceDelay={100}
                        defaultBreakpoint={breakpoints.mobile}
                    >
                        <MuiThemeProvider theme={Theme}>{routes}</MuiThemeProvider>
                        <DevTools />
                    </ReactBreakpoints>
                </Provider>
            )
        } else {
            cmp = (
                <Provider store={Store}>
                    <ReactBreakpoints
                        breakpoints={breakpoints}
                        debounceResize={true}
                        debounceDelay={100}
                        defaultBreakpoint={breakpoints.mobile}
                    >
                        <MuiThemeProvider theme={Theme}>{routes}</MuiThemeProvider>
                    </ReactBreakpoints>
                </Provider>
            )
        }

        return cmp
    }
}

export default App
