import React from 'react';
import './Services.css';
import Card from "../Card/Card.jsx";
import vidEdit from "../../img/video editing icon.png";
import Resume from "./Stephen Craig Master Resume.pdf";
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
        <br></br>
        <div className="s-left">
            <span>My Services</span>
            <spane>
            As a highly qualified software developer, I bring a wealth of expertise that sets me apart from the competition. First of all, my knowledge of various software development methodologies, including Agile, DevOps Scrum, Kaban, and Waterfall, demonstrates my ability to tailor approaches to project needs. Second, my commitment to ensuring the robustness of software through rigorous testing methodologies showcases your dedication to delivering high-quality products. Third, My adeptness in designing scalable, efficient software solutions and my passion for video and photo editing highlights my creativity and problem-solving skills. Lastly, I have a keen eye for detail and a commitment to quality assurance, which contributes significantly to the reliability and excellence of the software products I have developed. 
            </spane>
            <a href={Resume} download>
            <button className="button s-button">Download Resume</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
        </div>

        {/*right side*/}
        <div className="cards">
          <motion.div 
          initial={{top: "0.5rem", left:"25rem"}}
          whileInView={{left:'14rem'}}
          transition={transition}>
           <div>
              <Card
              icon = {vidEdit}
              heading = {'Design'}
              detail = {'Adobe Premiere Pro, Photoshop, Figma, Canva, Audacity'}
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
              detail = {'C++, Python, Java, HTML, CSS, JavaScript, React, SQL'}
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
