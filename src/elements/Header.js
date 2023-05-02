import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import img1 from './KIIT-logo-HD.png';

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
              
          

          <h2><input className='search__space' type="text" placeholder="search here" 
          value={this.state.value} 
          onChange={this.handleChange}/>
          <Link to={'/search/'+(this.state.value)}>
            <button class="button">search</button>
            </Link>
          </h2>
            <Link to='/'><button class="button">Headlines</button></Link>
            <Link to='/tag/india'><button class="button">India</button></Link>
            <Link to='/tag/world'><button class="button">World</button></Link>
            <Link to='/tag/business'><button class="button">Business</button></Link>
            <Link to='/tag/sports'><button class="button">Sports</button></Link>
            <Link to='/tag/stocks'><button class="button">Stocks</button></Link>
            </div>
            </div>

    );
  }

}

export default Header;
