import React, {Component} from 'react';
import axios from 'axios';

import SingleNewsDetail from './SingleNewsDetail.js';

class DetailNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  fetchNews = async () => {
    const self = this;
    const { handle } = self.props.match.params;
    const api_endpoint = `http://localhost:5000/${handle}`;

    await axios.get(api_endpoint).then(function (response){
      const data = response.data;
      const news = data.articles.slice(0, 1);
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
      <div className="single__news">
        {this.state.news.map((item, i) => (<SingleNewsDetail key={i} item={item}/> ))}
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

export default DetailNews;