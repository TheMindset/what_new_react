import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({article}) => {
  return [
    <article>
      Article
      <div className="image">
        <img src={article.img} alt=""/>
      </div>
      <h3> {article.headline} </h3>
      <p> {article.description} </p>
      <a href={article.url} target="blank"> More informations here</a>
    </article>
  ]
}
export default NewsArticle;