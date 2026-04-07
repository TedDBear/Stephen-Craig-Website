import React from 'react';
import './Services.css';
import Card from "../Card/Card.jsx";
import vidEdit from "../../img/video editing icon.png";
import Resume from "./Stephen Craig Master Resume.pdf";
import UiUx from "../../img/UX person.png";
import robot from "../../img/robot head.png";
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
            As a highly qualified software developer, I bring a wealth of expertise that sets me apart from the competition. I build fast, reliable, and scalable software solutions across the full stack. My work spans modern web development, AI engineering, cloud deployment, and workflow automation. I specialize in creating responsive applications with React, Next.js, and TypeScript; architecting backend systems with Node.js, FastAPI, and Supabase; and deploying secure, production-ready environments on AWS, Azure, and Docker. I also design automated workflows, integrate third‑party services, and develop AI‑powered tools — from chatbots to lead‑scoring engines — that streamline operations and enhance user experience. With a strong foundation in software engineering principles, I am committed to delivering high‑quality code and innovative solutions that drive business success.
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
              icon = {robot}
              heading = {'AI Engineering'}
              detail = {'RAG Models, Machine Learning, LLMs, Vector Databases, Fine Tuning, Model Evaluation'}
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
              detail = {'JavaScript, Typescript, Python, React, C++, Java, SQL, Docker, Git, Linux, AWS'}
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
            <motion.div 
           initial={{top: '31rem', left: '-12rem'}}
           whileInView={{left:'-5rem'}}
           transition={transition}>
           <div>
             <Card
              icon = {vidEdit}
              heading = {'Design'}
              detail = {'Adobe Premiere Pro, Photoshop, Figma, Canva, Audacity'}
              />
           </div>
           </motion.div>
           <div className="blur s-blur2" style={{backgroundColor: "greenyellow"}}></div>
        </div>
    </div>
    
  )
}

export default Services
