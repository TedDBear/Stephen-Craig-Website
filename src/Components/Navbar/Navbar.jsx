import React from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
import Toggle from '../Toggle/Toggle';

const Navbar = () => {
    return(
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Stephen Craig</div>
          <Toggle/>
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
                Services
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
              <Link to="p-wrapper" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            </ul>
          </div>
            <Link to="contact" spy={true} smooth={true}>
              <button className="button">Contact</button>
            </Link>
          
        </div>
      </div>
    )
  }

  export default Navbar
