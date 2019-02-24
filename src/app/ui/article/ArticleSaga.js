import Axios from 'axios'
import { call, put } from 'redux-saga/effects'

import { ArticleAction } from './ArticleAction'

class ArticleSaga {
    getArticles() {
        const url = 'https://jsonplaceholder.typicode.com/posts'

        return Axios.get(url)
    }

    *onGetArticles() {
        try {
            const response = yield call(this.getArticles)
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

const articleSaga = new ArticleSaga()

export { articleSaga }
