import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import LexiCrunch from '../../img/gif.gif';
import HomePage from '../../img/HomePage.JPG';

const Portfolio = () => {
  const projects = [
    {
      img: LexiCrunch,
      name: "Lexi Crunch",
      description: "Lexi Crunch is a word game that requires players to think of as many words from a group of 100 letters as possible in a 60 second time frame. It was coded using HTML, CSS, JavaScript, and React."
    },
    {
      img: HomePage,
      name: "Stephen Craig's Website",
      description: "This is my Website where I display my Software and Video Projects. It was coded using React."
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