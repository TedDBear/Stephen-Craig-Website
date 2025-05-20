import React, { useContext } from "react";
import './Intro.css';
import Github from '../../img/Github-Logo.png';
import LinkedIn from '../../img/Linkedin-logo.png';
import Picture from '../../img/Website-Picture.png';
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>What is up Everyone?</span>
                <span>This is Stephen Craig!</span>
                <span>Welcome to my digital space! I'm thrilled to have you explore the culmination of my passion and dedication in the world of software development. 
                As a seasoned developer, my website serves as a comprehensive showcase of the various software I've crafted throughout my career. 
                From innovative applications to intricate coding projects, this platform provides a firsthand look into the diverse range of skills and expertise I bring to the table. 
                Whether you're an employer, a potential collaborator, or simply curious about the digital landscapes I've traversed, I invite you to peruse my portfolio and discover the intricate tapestry of my software journey.
                Thank you for joining me on this digital adventure!</span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
                <button className="button i-button">Hire me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/TedDBear" target="_blank"><img id= 'github' src={Github} alt="Github logo"/></a>
                <a href="https://www.linkedin.com/in/stephen-craig-b85488253/" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" id="linkedin"/></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Picture} alt="Stephen Craig"/>
        </div>
    </div>
  )
}

export default Intro