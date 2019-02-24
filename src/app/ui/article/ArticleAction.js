import { Action } from '../../store/Action'

class ArticleAction extends Action {
    static GET_ARTICLES = 'GET_ARTICLES'
    static GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
    static GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR'
}

export { ArticleAction }
