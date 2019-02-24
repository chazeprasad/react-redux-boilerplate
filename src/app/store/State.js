import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { ArticleState } from '../ui/article/ArticleState'

class State {
    static Reducer(history) {
        return combineReducers({
            router: connectRouter(history),
            article: ArticleState.Reducer,
        })
    }
}

export { State }
