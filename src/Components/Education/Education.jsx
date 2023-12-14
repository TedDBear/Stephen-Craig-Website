import React from 'react';
import "./Education.css";
import { motion } from 'framer-motion';
import Box from '../Box/Box';
import TJC from"../../img/TJC building logo.png";
import UTTyler from "../../img/UT tyler logo.png";

const Education = () => {

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='education'>
      <div className="schools">
            <span className='title'>Education</span>
            <div>
              <Box
                heading={"Tyler Junior College"}
                year={"2021-2023"}
                GPA={"4.0"}
                major={"Associates in General Studies"}
                acheviment1={"Phi Theta Kappa Member"}
                acheviment2={"TJC Presidential Honors"}
                imgUrl={"https://upload.wikimedia.org/wikipedia/commons/8/8a/Tjc-viewbook-11-09-048.jpg"}
                bColor={"#FFD700"} 
                tColor={"gold"}
                tShadow={'0 1px 0 gold, 0 2px 0 gold, 0 3px 0 gold, 0 4px 0 gold, 0 5px 0 black, 0 6px 0 black, 0 7px 0 black, 0 8px 0 black, 0 9px 0 black, 0 10px 0 black, 0 11px 0 black, 0 12px 0 black, 0 20px 30px rgba(0, 0, 0, 0.5)'}
              />
            </div>

           
            <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
        </div>

    </div>
  )
}

export default Education