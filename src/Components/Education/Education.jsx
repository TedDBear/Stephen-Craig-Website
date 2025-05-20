import React from 'react';
import "./Education.css";
import Box from '../Box/Box';


const Education = () => {

  return (
    <div className='education'>
      <div className="schools">
            <span className='title'>Education</span>
            <div>
              <Box
                heading={"TJC"}
                year={"2021-2023"}
                GPA={"4.0"}
                major={"Associates in General Studies"}
                acheviment1={"Phi Theta Kappa"}
                acheviment2={"TJC Presidential Honors"}
                imgUrl={"https://upload.wikimedia.org/wikipedia/commons/8/8a/Tjc-viewbook-11-09-048.jpg"}
                bColor={"#FFD700"} 
                tColor={"gold"}
                tShadow={'0 1px 0 gold, 0 2px 0 gold, 0 3px 0 gold, 0 4px 0 gold, 0 5px 0 black, 0 6px 0 black, 0 7px 0 black, 0 8px 0 black, 0 9px 0 black, 0 10px 0 black, 0 11px 0 black, 0 12px 0 black, 0 20px 30px rgba(0, 0, 0, 0.5)'}
                left={"15rem"}
              />

              <Box
                heading={"UT Tyler"}
                year={"2023-2025"}
                GPA={"4.0"}
                major={"Bachelors in Computer Science"}
                acheviment1={"UT Tyler Honors College"}
                acheviment2={"National Society of Leadership & Success"}
                imgUrl={"https://championfiresecurity.com/wp-content/uploads/2022/12/ut_stem-scaled.jpg"}
                imgPos={"85%"}
                bColor={"blue"} 
                tColor={"blue"}
                tShadow={'0 1px 0 blue, 0 2px 0 blue, 0 3px 0 blue, 0 4px 0 blue, 0 5px 0 blue, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 orange, 0 10px 0 orange, 0 11px 0 orange, 0 12px 0 orange, 0 20px 30px rgba(0, 0, 0, 0.5)'}
                left={"50rem"}
              />
            </div>
            <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
        </div>

    </div>
  )
}

export default Education