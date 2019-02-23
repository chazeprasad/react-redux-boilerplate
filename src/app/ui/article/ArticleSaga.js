import Axios from 'axios'
import { call, put } from 'redux-saga/effects'

import { ArticleAction } from './ArticleAction'

class ArticleSaga {
    static GetArticles() {
        const url = 'https://jsonplaceholder.typicode.com/posts'

        return Axios.get(url)
    }

    static *OnGetArticles() {
        try {
            const response = yield call(ArticleSaga.GetArticles)
            const data = response.data.slice(0, 10)

            // dispatch a success action to the store with the new dog
            // const action = {type: ArticleAction.GET_ARTICLES_SUCCESS, payload: {articles: data}}
            const action = ArticleAction.Create(
                ArticleAction.GET_ARTICLES_SUCCESS,
                { articles: data }
            )
            yield put(action)
        } catch (error) {
            // dispatch a failure action to the store with the error
            const action = ArticleAction.Create(
                ArticleAction.GET_ARTICLES_ERROR,
                { error: error }
            )
            yield put(action)
        }
    }
}

export { ArticleSaga }
