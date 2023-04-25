import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import img1 from './KIIT-logo-HD.png';

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text"><img className="logo" src={img1} alt="" />    KIIT NEWS</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} />
            ))
          : "Loading" }
          
      </div>
    </div>
  );
}

export default News;
