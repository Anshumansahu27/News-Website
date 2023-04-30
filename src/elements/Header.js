import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import img1 from './KIIT-logo-HD.png';
import { useState } from 'react';

class Header extends Component {

  const [search, setSearch] = useState();

  render() {
    return (<div>
          <h2>
            <Link to="./"><h1 className="head__text"><img className="logo" src={img1} alt="" />    KIIT NEWS</h1></Link>
          </h2>

          <h2><input type="text" placeholder="search here" value={search} onChange={(e)=>setSearch(e.target.value)} /> <button class="button"><Link to="./{search}">search</Link></button>
          </h2>
            <Link to="./">Headlines</Link>
            <Link to="./politics">Politics</Link>
            <Link to="./business">Business</Link>
            <Link to="./sports">Sports</Link>
            <Link to="./cryptos">Cryptos</Link>
            </div>

    );
  }

}

export default Header;
