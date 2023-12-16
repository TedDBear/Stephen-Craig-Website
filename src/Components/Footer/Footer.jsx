import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from '../../img/Github-Logo.png';


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <spane>Email: robertduck096@gmail.com
          <br/>
          <br/>
          Phone: 703-999-8272
        </spane>
      </div>
    </div>
  );
};

export default Footer;
