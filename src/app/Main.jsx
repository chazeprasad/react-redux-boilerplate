/* eslint import/no-unresolved:0 global-require:0 */
/* eslint no-undef:0 */

import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from '../serviceWorker'
import ReactBreakpoints from 'react-breakpoints'

import App from './App'

const breakpoints = {
    mobile: 320,
    tablet: 768,
    desktop: 1025,
  }

  
const rootElement = document.getElementById('root')

if (rootElement) {
    document.body.style.backgroundColor = 'inherit'
    render(
        <ReactBreakpoints
            breakpoints={breakpoints}
            debounceResize={true}
            debounceDelay={100}
            defaultBreakpoint={breakpoints.mobile}
        >
            <App />
        </ReactBreakpoints>
    , rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
