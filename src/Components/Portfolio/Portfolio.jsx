import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import LexiCrunch from '../../img/gif.gif';
import Sprout from '../../img/Sprout.gif';
import HomePage from '../../img/HomePage.JPG';
import Computer_Comparing_Documents from '../../img/Computer Comparing Documents.png';

const Portfolio = () => {
  const projects = [
    {
      img: Sprout,
      name: "Sprout",
      description: "An interactive website designed to educate users about gardening and plan out user's gardens. It incorporates UI/UX design principles to ensure an intuitive and engaging user experience, including  drag-and-drop functionality for garden layout customization. It also detects plant-spacing conflicts and incompatible plants, promoting optimal garden health."
    },
    {
      img: LexiCrunch,
      name: "Lexi Crunch",
      description: "Lexi Crunch is a word game that requires players to think of as many words from a group of 100 letters as possible in a 60 second time frame. It was coded using HTML, CSS, JavaScript, and React."
    },
    {
      img: HomePage,
      name: "Stephen Craig's Website",
      description: "This is my Website where I display my Software Skills and Video Projects. It was coded using React."
    },
    {
      img: Computer_Comparing_Documents,
      name: "Craig.com",
      description: "Craig.com is an information retrieval system that compares research papers to determine their similarity."
    },
    
  ]
  return (
    <div className="p-wrapper">

    <div className="p-heading">
       
        <span>Portfolio</span>
        <div className="blur p-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur p-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
            {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="portfolio">
                <img src={project.img} alt="" />
                <span>{project.name}</span>
                <span>{project.description}</span>
              </div>
            </SwiperSlide>
          );
        })}
        </Swiper>
    </div>

  )
}

export default Portfolio