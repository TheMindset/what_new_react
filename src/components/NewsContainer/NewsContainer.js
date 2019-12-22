import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({news}) => {

  const newArticles = news.map((story, id) =>
    <NewsArticle 
      key={ id } 
      story={story} 
    />
  )

  return (
    <main> {newArticles} </main>
  )
}

export default NewsContainer;