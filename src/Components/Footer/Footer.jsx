import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from '../../img/Github-Logo.png';


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>robertduck096@gmail.com</span>
        <div className="f-icons">
        <img src={Github} alt="Github logo" style={{width:'177px', height:'98px'}}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
