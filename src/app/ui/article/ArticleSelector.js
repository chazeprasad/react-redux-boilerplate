// import { createSelector } from 'reselect'

class ArticleSelector {
    static GetArticles(state) {
        return state.article.articles
    }
}

export { ArticleSelector }
