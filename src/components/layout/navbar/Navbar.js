import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
          <div className="horiz-items-container">
            <span>
              <img className="app-logo" src="assets/images/logo.png" alt="App logo" />
            </span>
            <h1 className="app-name"> Dev-Test</h1>           
          </div>
          <div className="nav-header">Movies App</div>  
        </div>
    )
}


export default Navbar;