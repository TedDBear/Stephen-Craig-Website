import React from 'react';
import './Services.css';
import Card from "../Card/Card.jsx";
import vidEdit from "../../img/video editing icon.png";
import Resume from "./Stephen Craig Resume 2024.pdf";
import UiUx from "../../img/UX person.png";
import softwareDev from "../../img/UI-UX design.png";
import { motion } from "framer-motion";

const Services = () => {

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">

        <div className="s-left">
            <span>My Services</span>
            <spane>
                lorem ispum big dummy text ldjkfkdose rkrjfj uigjkegojre gjrioeg jreiopg jreiop gjreiopg jiop fe feerfjefo ef efoef eof eof ef
                <br/>
                More dummy text
            </spane>
            <a href={Resume} download>
            <button className="button s-button">Download Resume</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
        </div>

        {/*right side*/}
        <div className="cards">
          <motion.div 
          initial={{left:"25rem"}}
          whileInView={{left:'14rem'}}
          transition={transition}>
           <div>
              <Card
              icon = {vidEdit}
              heading = {'Design'}
              detail = {'Adobe Premiere Pro, Photoshop, Figma, Audacity'}
              />
           </div>
           </motion.div>

           <motion.div
           initial={{top:'12rem', left:'-11rem'}}
           whileInView={{left:'-4rem'}}
           transition={transition}>
           <div style={{top: '12rem', left: '-5rem'}}>
              <Card
              icon = {softwareDev}
              heading = {'Software Development'}
              detail = {'C++, Java, HTML, CSS, JavaScript, React'}
              />
           </div>
           </motion.div>

           <motion.div 
           initial={{top: '20rem', left: '26rem'}}
           whileInView={{left:'13rem'}}
           transition={transition}>
           <div>
              <Card
              icon = {UiUx}
              heading = {'UI/UX'}
              detail = {'Research, Analysis, Visualization, Design, Iteration, Empathy'}
              />
           </div>
           </motion.div>
           <div className="blur s-blur2" style={{backgroundColor: "greenyellow"}}></div>
        </div>
    </div>
    
  )
}

export default Services