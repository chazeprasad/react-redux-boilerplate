import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { polyglotReducer } from 'redux-polyglot'

import { ArticleState } from '../ui/article/ArticleState'
import { SidenavState } from '../ui/sidenav/SidenavState'
import { HeaderState } from '../ui/header/HeaderState'

class State {
    static Reducer(history) {
        return combineReducers({
            router: connectRouter(history),
            polyglot: polyglotReducer,

            article: ArticleState.Reducer,
            sidenav: SidenavState.Reducer,
            header: HeaderState.Reducer,
        })
    }
}

export { State }
