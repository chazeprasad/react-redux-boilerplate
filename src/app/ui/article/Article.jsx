import React, { Component } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { ArticleAction } from './ArticleAction'
import { ArticleSelector } from './ArticleSelector'
import ArticleView from './ArticleView'

class Article extends Component {
    dispatchAction = null
    constructor(props) {
        super(props)
        this.dispatchAction = this.props.dispatch
        this.itemClick = this.itemClick.bind(this)
    }

    componentDidMount() {
        this.getArticles()
    }

    getArticles() {
        const action = ArticleAction.Create(ArticleAction.GET_ARTICLES)
        this.dispatchAction(action)
    }
    itemClick = k => e => {
        console.log('clicked')
        console.log(k)
    }

    render() {
        const articles = this.props.articles

        return (
            <div>
                <ArticleView {...this.props} itemClick={this.itemClick} />
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
        clickTest: x => {
            console.log(x)
        },
    }
}

export default compose(
    connect(
        stateToProps,
        null
    )
)(Article)
