import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({articles}) => {

  const newArticles = articles.map((article, id) =>
    <NewsArticle 
      key={ id } 
      article={article} 
    />
  )

  return (
    <main> {newArticles} </main>
  )
}

export default NewsContainer;