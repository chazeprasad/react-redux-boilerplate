import React, { Component } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { ArticleAction } from './ArticleAction'
import { ArticleSelector } from './ArticleSelector'

class Article extends Component {
    dispatchAction = null
    constructor(props) {
        super(props)
        this.dispatchAction = this.props.dispatch
    }

    componentDidMount() {
        this.getArticles()
    }

    getArticles() {
        const action = ArticleAction.Create(ArticleAction.GET_ARTICLES)
        this.dispatchAction(action)
    }

    render() {
        const articles = this.props.articles

        return (
            <div>
                {articles.map(x => (
                    <p key={x.id}>{x.title}</p>
                ))}
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        articles: ArticleSelector.GetArticles(state),
    }
}

const actionToProps = dispatch => {
    return {
        getArticles: () => {
            const action = new ArticleAction(ArticleAction.GET_ARTICLES)
            dispatch(action)
        },
    }
}

export default compose(
    connect(
        stateToProps,
        null
    )
)(Article)
