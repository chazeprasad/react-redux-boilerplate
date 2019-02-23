import { takeLatest } from 'redux-saga/effects'
import { ArticleAction } from '../ui/article/ArticleAction'
import { ArticleSaga } from '../ui/article/ArticleSaga'

class RootSaga {
    // watcher saga: watches for actions dispatched to the store, starts worker saga
    static *GetWatcher() {
        yield takeLatest(ArticleAction.GET_ARTICLES, ArticleSaga.OnGetArticles)
    }
}

export { RootSaga }
