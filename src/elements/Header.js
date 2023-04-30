import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import img1 from './KIIT-logo-HD.png';
import { useState } from 'react';

class Header extends Component {


  render() {
    return (<div>
          <h2>
            <Link to="/"><h1 className="head__text"><img className="logo" src={img1} alt="" />    KIIT NEWS</h1></Link>
          </h2>

          <h2><input type="text" placeholder="search here"  /> <button class="button"><Link to="./{search}">search</Link></button>
          </h2>
            <Link to="/">Headlines</Link>
            <Link to="/search/politics">Politics</Link>
            <Link to="/search/business">Business</Link>
            <Link to="/search/sports">Sports</Link>
            <Link to="/search/cryptos">Cryptos</Link>
            </div>

    );
  }

}

export default Header;
