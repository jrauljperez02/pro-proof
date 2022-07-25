import React from 'react'
import './contact.css'

const Card = ({props}) => {
  return (
    <div className="card reeal">
     
        <div className="contact-icon">
            <i className={props.icon}></i>
        </div>
        <div className="info">
            <h3>{props.description}</h3>
            <span></span>
            <span>{props['content-description']}</span>
        </div>
        </div>
  )
}

export default Card