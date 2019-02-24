import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import Home from '../ui/home/Home'
import NoMatch from '../ui/no-match/NoMatch'

import { history } from '../store/Store'

const routes = (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
        </Switch>
    </ConnectedRouter>
)

export default routes
