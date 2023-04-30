import React from 'react';

const SingleNewsDetail = ({item}) => {
  return (
    <div className="news1">
      <div ClassName="news-item">
      <img className='news-img1' src={item.url} alt={item.url} />
      <p className="img_caption">{item.img_caption}</p>
      <h1 className="news__title">{item.title}</h1>
      <p className="news__desc">{item.content}</p>
      <span className="news__author">{item.author}</span> <br />
      <span className="news__published">{item.publishedAt}</span>
      <span className="news__source">{item.source.name}</span>
    </div>
    </div>
  )
}

export default SingleNewsDetail;
