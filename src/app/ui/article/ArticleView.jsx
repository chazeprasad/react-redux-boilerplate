import React from 'react'

const ArticleView = ({ articles, itemClick, clickTest }) => (
    <div>
        {articles.map(x => (
            <p key={x.id} data-id={x.id} onClick={itemClick(x)}>
                {x.title}
            </p>
        ))}
    </div>
)

export default ArticleView
