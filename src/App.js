import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './elements/Header.js';
import AllNews from './news/AllNews.js';
import TopHeadlines from './news/TopHeadlines.js';
import DetailNews from './news/DetailNews.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <div>
          
          <div id="main">
            <div className="site-section site-portfolio">
              <div className="container">
                <Header />

                <Switch>
                  <Route path="/" exact={true} component={TopHeadlines} ></Route>
                  <Route path="/search/:handle" component={AllNews} ></Route>
                  <Route path="/:handle" component={DetailNews} ></Route>
                  <Route component={() => (<div>404 Not found </div>)} />
                </Switch>
              </div>
            </div>
          </div>


        </div>
      </Router>
    );
  }

}

export default App;
