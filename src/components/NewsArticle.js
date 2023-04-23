import React from "react";
import './newsItem.css'

function NewsArticle({ data }) {
  return (
    <div className="news">
      <div ClassName="news-item">
      <img className='news-img' src={data.urlToImage} alt={data.urlToImage} />
      <p className="img_caption">{data.img_caption}</p>
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.content}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
    </div>
  );
}

export default NewsArticle;
