import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css";
import logoImage from '../../styles/logo.png';
import Search from './Search';



function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img  className='logo_img' src={logoImage} alt="BookMyShow"/></Link>
      </div>
      <div className="search-bar">
        <Search/>
      </div>
      <div className="user-actions">
        {/* <Link to="/wishlist"> #
        </Link> */}
        <div className="user-info">
          <span>Nupur</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
