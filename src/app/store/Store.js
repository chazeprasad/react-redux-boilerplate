/* global __DEVELOPMENT__ __DEVTOOLS__ */
/* eslint global-require: 0 */

import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import DevTools from '../util/DevTools'
import { RootSaga } from './RootSaga'
import { RootReducer } from './RootReducer'

const history = createBrowserHistory()
const initialState = {}
const middlewares = []
const sagaMiddleware = createSagaMiddleware()

middlewares.push(thunk)
middlewares.push(routerMiddleware(history))
middlewares.push(sagaMiddleware)

if (__DEVELOPMENT__) {
    const { createLogger } = require('redux-logger')
    const logger = createLogger({
        predicate: (getState, action) =>
            action.type !== 'EFFECT_TRIGGERED' &&
            action.type !== 'EFFECT_RESOLVED',
    })
    middlewares.push(logger)
}

let createStoreWithMiddleware = applyMiddleware(...middlewares)

if (__DEVTOOLS__) {
    createStoreWithMiddleware = compose(
        createStoreWithMiddleware,
        DevTools.instrument()
    )
}

const finalCreateStore = createStoreWithMiddleware(createStore)
const Store = finalCreateStore(RootReducer.GetState(history), initialState)
sagaMiddleware.run(RootSaga.GetWatcher)

/* if (__DEVELOPMENT__) {
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./state', () => {
            const nextReducer = require('./RootReducer').RootReducer.GetState
            Store.replaceReducer(nextReducer)
        })
    }
} */

export { history, Store }
