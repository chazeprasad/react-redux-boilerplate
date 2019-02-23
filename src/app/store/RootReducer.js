import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { ArticleReducer } from '../ui/article/ArticleReducer'

class RootReducer {
    static GetState(history) {
        return combineReducers({
            router: connectRouter(history),
            article: ArticleReducer.GetState,
        })
    }
}

export { RootReducer }
