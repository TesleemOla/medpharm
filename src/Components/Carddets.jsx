import React from 'react'
import "./styles/Dashboard/carddets.scss"

const Carddets = ({tile, item, heading, value, className}) => {
  return (
    <div>
        <div className={className}>
            <div className={"tile"}>
                <img src={tile} alt="tile"/>
                <img src={item} alt="people" className="item"/>
            </div>
            <p>{heading}</p>
            <h1 className="itemval-bg">{value}</h1>
        </div>
        
    </div>
  )
}

export default Carddets