import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import img1 from './KIIT-logo-HD.png';
import { useState } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (<div>
            <div>
            <h1 className="head__text"><Link to="/">
              <img className="logo" src={img1} alt="" /></Link>    KIIT NEWS</h1>
              
          

          <h2><input type="text" placeholder="search here" 
          value={this.state.value} 
          onChange={this.handleChange}/> 
          <Link to="/search/{this.target.value}">
            <button class="button">search</button>
            </Link>
          </h2>
            <Link to="/">Headlines</Link>
            <Link to="/search/politics">Politics</Link>
            <Link to="/search/business">Business</Link>
            <Link to="/search/sports">Sports</Link>
            <Link to="/search/cryptos">Cryptos</Link>
            </div>
            </div>

    );
  }

}

export default Header;
