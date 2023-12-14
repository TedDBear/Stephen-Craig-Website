import React from 'react'
import "./Card.css"

const Card = ({icon, heading, detail}) => {
  return (
    <div className='card'>
        <img src={icon} alt="icon"/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card