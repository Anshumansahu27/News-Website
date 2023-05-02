import React, {Component} from 'react';
import axios from 'axios';

import SingleNewsItem from './SingleNewsItem.js';

class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  fetchNews = async () => {
    const self = this;
    const { handle } = self.props.match.params;
    const api_endpoint = `http://localhost:5000/tag/${handle}`;

    await axios.get(api_endpoint).then(function (response){
      const data = response.data;
      const news = data.articles.slice(0, 30);
      console.log(handle);

      self.setState({
        news: news
      });
    }).catch(function (err){
      console.log(err);
    })
  }

  componentDidMount = () => {
    this.fetchNews();
  }

  componentWillReceiveProps = () => {
    this.fetchNews();
  }

  renderNewsItems(){ 
    return (
      <div className="all__news">
        {this.state.news.map((item, i) => (<SingleNewsItem key={i} item={item}/> ))}
      </div>
    );    
  }

  render() {
    return (
      <div className="row no-gutter">
        {this.renderNewsItems()}
      </div>
    );
  }

}

export default AllNews;