import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({story}) => {
  return [
    <article>
      Article
      <img src={story.img} alt=""/>
      <h2> {story.headline} </h2>
      <p> {story.description} </p>
      <a href={story.url} target="blank"> More informations here</a>
    </article>
  ]
}
export default NewsArticle;