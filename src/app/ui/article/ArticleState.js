import { ArticleAction } from './ArticleAction'

const initialState = {
    fetching: false,
    error: false,
    articles: [{ id: 1111, title: 'test' }],
}

class ArticleState {
    static Reducer(state = initialState, action) {
        switch (action.type) {
            case ArticleAction.GET_ARTICLES_SUCCESS:
                return {
                    ...state,
                    articles: action.payload.articles,
                }
            default:
                return state
        }
    }
}

export { ArticleState }
