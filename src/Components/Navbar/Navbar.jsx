import React from 'react';
import './Navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    return(
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Stephen Craig</div>
          <span>toggle</span>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="education" spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            </ul>
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
    )
  }

  export default Navbar