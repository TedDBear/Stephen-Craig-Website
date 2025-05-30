import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
    <div className='achievement'>
        <div className="circle" style={{color: darkMode?'green':''}}>4+</div>
        <span style={{color: darkMode?'white':''}}>Years </span>
        <span>Experience</span>
    </div>
    <div className='achievement'>
        <div className="circle" style={{color: darkMode?'green':''}}>25+</div>
        <span style={{color: darkMode?'white':''}}>Completed </span>
        <span>Projects</span>
    </div>
    <div className='achievement'>
        <div className="circle" style={{color: darkMode?'green':''}}>4.0</div>
        <span style={{color: darkMode?'white':''}}>Cumulative</span>
        <span>GPA</span>
    </div>
</div>
  )
}

export default Experience