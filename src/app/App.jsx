/* global __DEVTOOLS__ __USE_GA__ __GA_ID__ */
/* eslint global-require:0 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { Theme } from '../theme/Theme'
import { Store, history } from './store/Store'
import routes from './routing/route'
import './app.scss'

class App extends Component {
    render() {
        let cmp

        if (__DEVTOOLS__) {
            const DevTools = require('./util/DevTools').default
            cmp = (
                <Provider store={Store}>
                    <MuiThemeProvider theme={Theme}>{routes}</MuiThemeProvider>
                    <DevTools />
                </Provider>
            )
        } else {
            cmp = (
                <Provider store={Store}>
                    <MuiThemeProvider theme={Theme}>{routes}</MuiThemeProvider>
                </Provider>
            )
        }

        return cmp
    }
}

export default App
