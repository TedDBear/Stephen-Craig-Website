import React from 'react'
import "./Box.css"


const Box = ({icon, heading, year, GPA, major, acheviment1, acheviment2, imgUrl, imgPos, bColor, tColor, tShadow, left, intTop, finTop}) => {
  
  let divStyle = {
    marginTop: '2rem',
    color:'white', 
    textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundColor: 'black',
    backgroundSize: 'cover',
    backgroundPosition: imgPos,
    backgroundRepeat: 'no-repeat',

    width: '300px',
    borderColor: bColor,
    left: left
  };

  let headerStyle = {
    color: tColor,
    textShadow: tShadow
  }

  return (
    
      <div className='box' style={divStyle}>
          <div style={headerStyle}>{heading}</div>
          <spane>{year}</spane>
          <spane>{GPA} GPA</spane>
          <spane>{major}</spane>
            <li>{acheviment1}</li>
            <li>{acheviment2}</li>
      </div>
      
  )
}

export default Box