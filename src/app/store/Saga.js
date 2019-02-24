import { takeLatest } from 'redux-saga/effects'
import { ArticleAction } from '../ui/article/ArticleAction'
import { articleSaga } from '../ui/article/ArticleSaga'

class Saga {
    // watcher saga: watches for actions dispatched to the store, starts worker saga
    static *GetWatcher() {
        yield takeLatest(ArticleAction.GET_ARTICLES, articleSaga.onGetArticles)
    }
}

export { Saga }
