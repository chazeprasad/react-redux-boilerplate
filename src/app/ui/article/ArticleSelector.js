import { createSelector } from 'reselect'

class ArticleSelector {

    static GetArticles = state => state.article.articles
}

export { ArticleSelector }
