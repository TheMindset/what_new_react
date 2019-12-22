import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({story}) => {
  return [
    <article>
      Article
      <img src={story.img} alt=""/>
      <h3> {story.headline} </h3>
      <p> {story.description} </p>
      <a href={story.url} target="blank"> More informations here</a>
    </article>
  ]
}
export default NewsArticle;