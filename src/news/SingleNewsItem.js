import React from 'react';
import { Link } from 'react-router-dom';

const SingleNewsItem = ({item}) => {
  return (
    <div className="news">
      <div ClassName="news-item">
      <img className='news-img' src={item.url} alt={item.url} />
      <p className="img_caption">{item.img_caption}</p>
      <h1 className="news__title">{item.title}</h1>
      <p className="news__desc">{item.description}</p>
      <span className="news__author">{item.author}</span> <br />
      <span className="news__published">{item.publishedAt}</span>
      <span className="news__source">{item.source.name}</span>
      <p><button class="button"><Link to="/{item.source.id}">Read More</Link></button></p>
    </div>
    </div>
  )
}

export default SingleNewsItem;
