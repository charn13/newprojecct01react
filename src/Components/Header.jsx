import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (

  
    <header className="shadow sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12 logo"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="text-orange-700"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  className="nav-link"
                  activeClassName="text-orange-700"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <link to="Contact" />
                <NavLink
                  to="/Contact"
                 
                  className="nav-link"
                  activeClassName="text-orange-700"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="https://github.com/sardarjii12"
                  className="nav-link"
                  activeClassName="text-orange-700"
                >
                  Github
                </NavLink>
              </li>
            </ul>
            <div className="navbar-text">
              <Link to="Login" className="text-gray-800 mr-2">
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Header