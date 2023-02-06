import React from 'react'
import "./styles/Dashboard/carddets.scss"

const Carddets = ({tile, item, heading, value, className}) => {
  return (
        <div className={className}>
            <div className={"tile"}>
                <img src={tile} alt="tile"/>
                <img src={item} alt="people" className="item"/> 
            </div>
            <div className="dets-f">
                <p className="desc-det">{heading}</p>
                <p className="itemval-bg">{value}</p>
            </div>
        </div>
        
  )
}

export default Carddets